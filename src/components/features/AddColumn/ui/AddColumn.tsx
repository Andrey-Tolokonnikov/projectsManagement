import { useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { DialogTitle } from "@radix-ui/react-dialog"
import { addColumn } from "@/store/tasksSlice"

import { IColumn } from "@/components/widgets/Column/model/Column"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const AddColumn = () => {
  const dispatch = useDispatch()
  const [columnName, setColumnName] = useState("")
  const data = useSelector((state: RootState) => state.tasks)
  const lastColumnId = Math.max(
    ...data.columns.map((column) => parseInt(column.id.split("-")[1]))
  )
  //console.log(data.columns.map((column) => parseInt(column.id)))

  const handleSave = () => {
    // Генерация уникального ID для нового столбца
    const newColumnId = `column-${lastColumnId + 1}`

    // Создание нового объекта задачи
    const newColumn: IColumn = {
      id: newColumnId,
      title: columnName,
      taskIds: [],
    }

    dispatch(addColumn(newColumn))

    setColumnName("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить столбец</Button>
      </DialogTrigger>
      <DialogTitle className="hidden">Добавить задачу</DialogTitle>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Название столбца
            </Label>
            <Input
              id="text"
              className="col-span-3"
              value={columnName} // Привязываем локальное состояние к полю ввода
              onChange={(e) => setColumnName(e.target.value)} // Обновляем состояние при вводе
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleSave}>
              Сохранить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddColumn
