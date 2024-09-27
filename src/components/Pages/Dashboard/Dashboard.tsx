import Container from "@/components/shared/Container/Container"
import { IColumn } from "@/components/widgets/Column/model/Column"
import Column from "@/components/widgets/Column/ui/Column"
import { ITask } from "@/components/widgets/Task/model/model"
import { setColumns, TasksState } from "@/store/tasksSlice"

import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useDispatch, useSelector } from "react-redux"

// interface InitialData {
//   columns: { [key: string]: IColumn }
//   tasks: { [key: string]: ITask }
//   columnOrder: string[]
// }

// const initialData: InitialData = {
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "To be done",
//       taskIds: ["task-1", "task-2", "task-3"],
//     },
//     "column-2": {
//       id: "column-2",
//       title: "In progress",
//       taskIds: ["task-4", "task-5"],
//     },
//     "column-3": {
//       id: "column-3",
//       title: "Done",
//       taskIds: [],
//     },
//   },
//   tasks: {
//     "task-1": { id: "task-1", content: "Task 1" },
//     "task-2": { id: "task-2", content: "Task 2" },
//     "task-3": { id: "task-3", content: "Task 3" },
//     "task-4": { id: "task-4", content: "Task 4" },
//     "task-5": { id: "task-5", content: "Task 5" },
//   },
//   columnOrder: ["column-1", "column-2", "column-3"],
// }

const Dashboard: React.FC = () => {
  //const [data, setData] = useState<InitialData>(initialData)
  const data = useSelector((state: TasksState) => state.tasks)

  const dispatch = useDispatch()

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    // Если нет назначения, возвращаемся
    if (!destination) {
      return
    }

    // Если переместили задачу в ту же колонку и на то же место
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const startColumn = data.columns[source.droppableId]
    const finishColumn = data.columns[destination.droppableId]

    // Перемещение в пределах одной колонки
    if (startColumn.id === finishColumn.id) {
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      }

      dispatch(
        setColumns({
          ...data.columns,
          [newColumn.id]: newColumn,
        })
      )
    } else {
      // Перемещение между колонками
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStart = {
        ...startColumn,
        taskIds: startTaskIds,
      }

      const finishTaskIds = Array.from(finishColumn.taskIds)
      finishTaskIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finishColumn,
        taskIds: finishTaskIds,
      }

      dispatch(
        setColumns({
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        })
      )
    }
  }
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </div>
      </DragDropContext>
    </Container>
  )
}

export default Dashboard
