import { AuthProvider } from "@/features/auth/context/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "@/app/provider/provider";
import { queryClient } from "@/app/query/queryClient";
import { ErrorBoundaryWrapper } from "@/shared/components/ErrorBoundaryWrapper";
import { Outlet } from "react-router-dom";
import "@/main.css";

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
