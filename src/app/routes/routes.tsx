import Auth from "@/features/auth/components/Container";
import App from "@/App";
import MainLayout from "../Layout/MainLayout";
import ProtectedRoute from "./ProtectedRoutes";
import EmptyProjectPage from "@/features/projects/pages/EmptyProjectPage";
import ProjectView from "@/features/projects/pages/ProjectView";
import Dashboard from "@/features/dashboard";
import Projects from "@/features/projects";

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
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "projects",
                element: <Projects />,
              },
              {
                path: "",
                element: <EmptyProjectPage />,
              },
              {
                path: ":projectID",
                element: <ProjectView />,
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
