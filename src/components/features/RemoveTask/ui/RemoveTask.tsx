import Confirm from "@/components/shared/Confirm/Confirm"
import { deleteTask } from "@/store/tasksSlice"
import { X } from "lucide-react"
import { useDispatch } from "react-redux"

type Props = {
  taskId: string
}
const RemoveTask = (props: Props) => {
  const dispatch = useDispatch()

  return (
    <Confirm
      buttonContent={<X size={16} />}
      title="Удалить задачу"
      description="Вы уверены что хотите удалить задачу? Отменить это действие будет невозможно"
      onConfirm={() => {
        dispatch(deleteTask(props.taskId))
      }}
    />
  )
}

export default RemoveTask
