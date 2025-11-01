import TaskContainer from "@/features/tasks/components/TaskContainer";
import Auth from "@/features/auth/components/Container";
import App from "@/App";
import MainLayout from "./Layout/MainLayout";
import Login from "@/features/auth/components/Login";
import ProtectedRoute from "./ProtectedRoutes";

// export const routes = [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "app",
//         element: <MainLayout />,
//         children: [
//           {
//             path: ":projectID",
//             element: <TaskContainer />,
//           }
//         ],
//       },
//       {
//         path: "auth/:authPage",
//         element: <Auth />,
//       }
//     ]
//   },
// ];

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
