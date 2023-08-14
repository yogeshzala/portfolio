import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../containers/PageNotFound";

import { AnimatePresence } from "framer-motion";
import { ROUTES, URLS } from "../utils/routing";
import MainLayout from "../layouts/MainLayout";
import MenuBar from "../components/MenuBar";

export default function Routing() {
  const location = useLocation();

  return (
    <Fragment>
      <MenuBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            {ROUTES.map(({ id, ...route }) => (
              <Route key={id} {...route} />
            ))}
          </Route>
          <Route path={URLS.PAGE_NOT_FOUND.url} element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}
