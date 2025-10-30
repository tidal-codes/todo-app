import TaskContainer from "@/features/tasks/components/TaskContainer";
import MainLayout from "./Layout/MainLayout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: ":projectID",
        element: <TaskContainer />,
      },
    ],
  },
];
