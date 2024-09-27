import { IColumn } from "@/components/widgets/Column/model/Column"
import { ITask } from "@/components/widgets/Task/model/model"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ITasksState {
  columns: IColumn[]
  tasks: ITask[]
}

const initialState: ITasksState = {
  columns: [
    {
      id: "column-1",
      title: "To be done",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-4", "task-5"],
    },
    {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  ],
  tasks: [
    { id: "task-1", content: "Task 1" },
    { id: "task-2", content: "Task 2" },
    { id: "task-3", content: "Task 3" },
    { id: "task-4", content: "Task 4" },
    { id: "task-5", content: "Task 5" },
  ],
}

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<IColumn[]>) => {
      state.columns = action.payload
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
  },
})

export const { setColumns, setTasks, addTask } = TasksSlice.actions
