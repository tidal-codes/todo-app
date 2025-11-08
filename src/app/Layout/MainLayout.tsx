// src/app/layouts/MainLayout.tsx
import Sidebar from "@/shared/components/Sidebar";
import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/context/AuthProvider";
import { initSync } from "@/app/sync/syncManager";
import { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useColorMode } from "../theme/color-mode";

const MainLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        await initSync();
      })();
    }
  }, [user]);

  return (
    <Box className="app-layout" style={{ display: "flex", width: "full" }}>
      <Box
        className="main-content"
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Header />
        <Flex>
          <Sidebar />
          <Flex flexDirection="column" flex={1}>
            <Outlet />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default MainLayout;
