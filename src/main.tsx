import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import { system } from "@/app/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./idk/query";
import { ErrorBoundaryWrapper } from "./shared/components/ErrorBoundaryWrapper";
import App from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ErrorBoundaryWrapper>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
    </QueryClientProvider>
  </ErrorBoundaryWrapper>,
  // </StrictMode>,
);
