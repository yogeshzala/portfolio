import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../containers/PageNotFound";

import { AnimatePresence } from "framer-motion";
import { ROUTES, URLS } from "../utils/routing";
import MainLayout from "../layouts/MainLayout";
import MenuBar from "../components/MenuBar";

export default function Routing() {
  const [is404, setIs404] = useState();
  const location = useLocation();

  useEffect(() => {
    setIs404(ROUTES.some((route) => route.path === location.pathname));
  }, [location]);

  return (
    <Fragment>
      {is404 && <MenuBar />}
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
