import Confirm from "@/components/shared/Confirm/Confirm"
import { deleteColumn } from "@/store/tasksSlice"
import { X } from "lucide-react"
import { useDispatch } from "react-redux"

type Props = {
  columnId: string
}
const RemoveColumn = (props: Props) => {
  const dispatch = useDispatch()

  return (
    <Confirm
      buttonContent={<X size={16} />}
      title="Удалить столбец"
      description="Вы уверены что хотите удалить столбец? Все задачи в этом столбце тоже будут удалены."
      onConfirm={() => {
        dispatch(deleteColumn(props.columnId))
      }}
    />
  )
}

export default RemoveColumn
