import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import { system } from "@/app/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./idk/query";
import { ErrorBoundaryWrapper } from "./shared/components/ErrorBoundaryWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
const route = createBrowserRouter(routes);
createRoot(document.getElementById("root")!).render(
  // <StrictMode>

  <RouterProvider router={route} />,
  // </StrictMode>,
);
