import TaskContainer from "@/features/tasks/components/TaskContainer";
import Auth from "@/features/auth/components/Container";
import App from "@/App";
import MainLayout from "./Layout/MainLayout";
import Login from "@/features/auth/components/Login";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "app",
        element: <MainLayout />,
        children: [
          {
            path: ":projectID",
            element: <TaskContainer />,
          },
          {
            path: "",
            element: <div>404</div>,
          },
          {
            path: "*",
            element: <div>404</div>,
          },
        ],
      },
      {
        path: "auth/:authPage",
        element: <Auth />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
];
