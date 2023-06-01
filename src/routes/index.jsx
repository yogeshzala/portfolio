import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "../Layouts";
import Home from "../containers/Home";
import About from "../containers/About";
import Skills from "../containers/Skills";
import PageNotFound from "../containers/PageNotFound";
import Portfolio from "../containers/Portfolio";
import Contact from "../containers/Contact";

import { AnimatePresence } from "framer-motion";

export default function Routing() {
  const location = useLocation();
  return (
    <section>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </section>
  );
}
