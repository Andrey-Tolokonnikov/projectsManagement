import { configureStore } from "@reduxjs/toolkit";
import { TasksSlice } from "./tasksSlice";
import { ProjectsSlice } from "./projectsSlice";

export const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    projects: ProjectsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
