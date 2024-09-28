import { Draggable } from "react-beautiful-dnd"
import { ITask } from "../model/model"
import RemoveTask from "@/components/features/RemoveTask/ui/RemoveTask"
import CompleteTask from "@/components/features/CompleteTask/ui/CompleteTask"

type Props = {
  task: ITask
  index: number
}

const Task = (props: Props) => {
  return (
    <Draggable
      key={props.task.id}
      draggableId={props.task.id}
      index={props.index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-2 rounded-md mb-2 flex justify-between items-center shadow-md"
        >
          <div className="flex gap-1 items-center">
            <CompleteTask task={props.task} />
            <div>{props.task.content}</div>
          </div>
          <RemoveTask taskId={props.task.id} />
        </div>
      )}
    </Draggable>
  )
}

export default Task
