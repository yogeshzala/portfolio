import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../hoc/AnimatedPage";

export default function MainLayout() {
  return (
    <Fragment>
      <div className="px-6 sm:px-16 lg:px-24">
        <div className="mr-11 sm:mr-16">
          <AnimatedPage>
            <Outlet />
          </AnimatedPage>
        </div>
      </div>
    </Fragment>
  );
}
