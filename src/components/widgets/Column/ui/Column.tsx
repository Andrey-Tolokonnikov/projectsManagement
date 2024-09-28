import { Droppable } from "react-beautiful-dnd"
import { IColumn } from "@/components/widgets/Column/model/Column"
import { ITask } from "../../Task/model/model"
import Task from "../../Task/ui/Task"
import { cn } from "@/lib/utils"
import RemoveColumn from "@/components/features/RemoveColumn/ui/RemoveColumn"
type Props = {
  column: IColumn
  tasks: ITask[]
}
const colors = ["bg-[#e8e9da]", "bg-[#e3d9e9]", "bg-[#d9e7e6]"]
const Column = (props: Props) => {
  return (
    <Droppable droppableId={props.column.id} key={props.column.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={cn(
            "p-3 rounded-md min-w-[200px] max-w-[400px]",
            colors[
              (parseInt(props.column.id.split("-")[1]) - 1) % colors.length
            ]
          )}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-lg font-semibold">{props.column.title}</div>
            <RemoveColumn columnId={props.column.id} />
          </div>

          {props.tasks.map((task, index) => (
            <Task task={task} index={index} key={task.id} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column
