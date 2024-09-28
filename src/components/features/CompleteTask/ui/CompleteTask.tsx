import { ITask } from "@/components/widgets/Task/model/model"
import { cn } from "@/lib/utils"
import { completeTask, uncompleteTask } from "@/store/tasksSlice"
import { Check } from "lucide-react"
import { useDispatch } from "react-redux"

type Props = {
  task: ITask
}

const CompleteTask = (props: Props) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() =>
        dispatch(
          props.task.isCompleted
            ? uncompleteTask(props.task.id)
            : completeTask(props.task.id)
        )
      }
      className={cn(
        "cursor-pointer border  rounded-full w-5 h-5 flex justify-center items-center",
        props.task.isCompleted ? "border-green-500" : "border-slate-300"
      )}
    >
      <Check
        size={12}
        strokeWidth={3}
        absoluteStrokeWidth
        color={props.task.isCompleted ? "green" : "#ccc"}
      />
    </div>
  )
}

export default CompleteTask
