// src/app/layouts/MainLayout.tsx
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";
import { FunnelSimpleIcon } from "@phosphor-icons/react";
import TaskView from "@/features/tasks/components/TaskView";
const MainLayout = () => {
  return (
    <div className="app-layout" style={{ display: "flex", width: "full" }}>
      <Sidebar />
      <div
        className="main-content"
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Header />
        <main style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          {/* <Outlet /> */}
          <TaskView />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
