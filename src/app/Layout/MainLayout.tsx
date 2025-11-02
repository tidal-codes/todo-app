// src/app/layouts/MainLayout.tsx
import Sidebar from "@/shared/components/Sidebar";
import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/context/AuthProvider";
import { initSync } from "@/app/sync/syncManager";
import { useEffect } from "react";
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
    <div className="app-layout" style={{ display: "flex", width: "full" }}>
      <Sidebar />
      <div
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
        <main
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
