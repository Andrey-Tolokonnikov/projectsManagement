import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProjects {
  id: string;
  project: string;
  users: string[];
}

export interface IProjectState {
  projects: IProjects[];
}

const initialState: IProjectState = {
  projects: [],
};

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{ project: string; users: string[] }>
    ) => {
      const newProject: IProjects = {
        id: `task-${Date.now()}`,
        ...action.payload,
      };

      state.projects = [...state.projects, newProject];
    },

    addUserToProject: (
      state,
      action: PayloadAction<{ projectId: string; newUser: string }>
    ) => {
      const { projectId, newUser } = action.payload;

      const _project = state.projects.find((p) => p.id === projectId);

      if (_project) {
        _project.users = [..._project.users, newUser];
      }
    },
  },
});

export const { addProject, addUserToProject } = ProjectsSlice.actions;
