import { Droppable } from "react-beautiful-dnd"
import { IColumn } from "@/components/widgets/Column/model/Column"
import { ITask } from "../../Task/model/model"
import Task from "../../Task/ui/Task"
import { cn } from "@/lib/utils"
type Props = {
  column: IColumn
  tasks: ITask[]
}
const colors = ["bg-red-400", "bg-blue-400", "bg-green-400"]
const Column = (props: Props) => {
  return (
    <Droppable droppableId={props.column.id} key={props.column.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={cn(
            "p-5 rounded-md min-w-[200px]",
            colors[parseInt(props.column.id.split("-")[1]) - 1]
          )}
        >
          <h3 className=" text-lg">{props.column.title}</h3>
          {props.tasks.map((task, index) => (
            <Task task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column
