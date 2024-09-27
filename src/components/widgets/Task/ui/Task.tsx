import { Draggable } from "react-beautiful-dnd"
import { ITask } from "../model/model"

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
          className="bg-white p-2 rounded-md mb-2"
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task
