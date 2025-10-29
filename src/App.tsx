import { useColorMode } from "./components/ui/color-mode";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { initSync } from "./idk/syncManager";

const App = () => {
  const { setColorMode } = useColorMode();
  const route = createBrowserRouter(routes);

  useEffect(() => {
    setColorMode("light");
    (async () => {
      await initSync();
    })();
  }, []);

  return <RouterProvider router={route} />;
};

export default App;
