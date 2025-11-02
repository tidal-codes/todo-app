import TaskContainer from "@/features/tasks/components/TaskContainer";
import Auth from "@/features/auth/components/Container";
import App from "@/App";
import MainLayout from "../Layout/MainLayout";

import ProtectedRoute from "./ProtectedRoutes";
import EmptyProjectPage from "@/features/projects/pages/EmptyProjectPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "app",
            element: <MainLayout />,
            children: [
              {
                path: "",
                element: <EmptyProjectPage />,
              },
              {
                path: ":projectID",
                element: <TaskContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "auth/:authPage",
        element: <Auth />,
      },
    ],
  },
];
