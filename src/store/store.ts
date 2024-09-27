import { configureStore } from "@reduxjs/toolkit"
import { TasksSlice } from "./tasksSlice"

export const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
