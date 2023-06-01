import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../hoc/AnimatedPage";

export default function AppLayout() {
  return (
    <section>
      <div className="min-h-screen bg-slate-950">
        <SideBar />
        <div className="mr-12 sm:mr-24">
          <AnimatedPage>
            <Outlet />
          </AnimatedPage>
        </div>
      </div>
    </section>
  );
}
