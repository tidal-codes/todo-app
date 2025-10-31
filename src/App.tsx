import { AuthProvider } from "./features/auth/context/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./app/Layout/MainLayout";
import { Provider } from "./components/ui/provider";
import { queryClient } from "./idk/query";
import { ErrorBoundaryWrapper } from "./shared/components/ErrorBoundaryWrapper";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ErrorBoundaryWrapper>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundaryWrapper>
  );
};

export default App;
