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
import { addTask, setColumns } from "@/store/tasksSlice"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { ITask } from "@/components/widgets/Task/model/model"

const AddTask = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.tasks)
  const [taskContent, setTaskContent] = useState("") // Локальное состояние для текста задачи

  const handleSave = () => {
    // Генерация уникального ID для новой задачи
    const newTaskId = `task-${Date.now()}`

    // Создание нового объекта задачи
    const newTask: ITask = {
      id: newTaskId,
      content: taskContent,
      isCompleted: false,
    }

    // Добавление новой задачи в состояние
    dispatch(addTask(newTask))

    const firstColumn = structuredClone(data.columns[0])
    firstColumn.taskIds.push(newTaskId)

    dispatch(setColumns([firstColumn, ...data.columns.slice(1)]))

    setTaskContent("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить задачу</Button>
      </DialogTrigger>
      <DialogTitle className="hidden">Добавить задачу</DialogTitle>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Текст задачи
            </Label>
            <Input
              id="text"
              className="col-span-3"
              value={taskContent} // Привязываем локальное состояние к полю ввода
              onChange={(e) => setTaskContent(e.target.value)} // Обновляем состояние при вводе
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

export default AddTask
