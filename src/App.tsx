import { useColorMode } from "./components/ui/color-mode";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";

const App = () => {
  const { setColorMode } = useColorMode();
  const route = createBrowserRouter(routes);
  useEffect(() => {
    setColorMode("light");
  }, []);

  return <RouterProvider router={route} />;
};

export default App;
