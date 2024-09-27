import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ITasksState {
  columns: {
    [key: string]: {
      id: string
      title: string
      taskIds: string[]
    }
  }
  tasks: {
    [key: string]: {
      id: string
      content: string
    }
  }
  columnOrder: string[]
}

const initialState: ITasksState = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "To be done",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-4", "task-5"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  tasks: {
    "task-1": { id: "task-1", content: "Task 1" },
    "task-2": { id: "task-2", content: "Task 2" },
    "task-3": { id: "task-3", content: "Task 3" },
    "task-4": { id: "task-4", content: "Task 4" },
    "task-5": { id: "task-5", content: "Task 5" },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
}

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<ITasksState["columns"]>) => {
      state.columns = action.payload
    },
    setTasks: (state, action: PayloadAction<ITasksState["tasks"]>) => {
      state.tasks = action.payload
    },
  },
})

export const { setColumns } = TasksSlice.actions
