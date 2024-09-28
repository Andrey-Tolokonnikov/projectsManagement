import AddColumn from "@/components/features/AddColumn/ui/AddColumn"
import AddTask from "@/components/features/AddTask/ui/AddTask"
import Container from "@/components/shared/Container/Container"
import { IColumn } from "@/components/widgets/Column/model/Column"

import Column from "@/components/widgets/Column/ui/Column"
import { RootState } from "@/store/store"

import { setColumns } from "@/store/tasksSlice"

import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useDispatch, useSelector } from "react-redux"

const Dashboard: React.FC = () => {
  const data = useSelector((state: RootState) => state.tasks)

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

    const startColumn = data.columns.find(
      (column) => column.id === source.droppableId
    )
    const finishColumn = data.columns.find(
      (column) => column.id === destination.droppableId
    )

    if (!startColumn || !finishColumn) {
      return
    }

    // Перемещение в пределах одной колонки
    if (startColumn.id === finishColumn.id) {
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const copyColumn: IColumn = structuredClone(
        data.columns.find((column) => column.id === startColumn.id)!
      )
      copyColumn!.taskIds = newTaskIds
      const newColumns = [
        ...data.columns.filter((column) => column.id !== startColumn.id),
        copyColumn,
      ]
      newColumns.sort((a, b) => a.id.localeCompare(b.id))
      dispatch(setColumns(newColumns))
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

      const newColumns = [
        ...data.columns.filter(
          (column) =>
            column.id !== startColumn.id && column.id !== finishColumn.id
        ),
        newStart,
        newFinish,
      ]
      newColumns.sort((a, b) => a.id.localeCompare(b.id))
      dispatch(setColumns(newColumns))
    }
  }
  return (
    <Container className="mt-4">
      <div className="flex gap-4">
        <AddTask />
        <AddColumn />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 mt-4">
          {data.columns.map((column: IColumn) => {
            const tasks = column.taskIds.map(
              (taskId) => data.tasks.find((task) => task.id === taskId)!
            )
            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </div>
      </DragDropContext>
    </Container>
  )
}

export default Dashboard
