import React, { Fragment } from "react";

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_ITEMS } from "../../utils/routing";
import { motion } from "framer-motion";

export default function MenuBar() {
  const location = useLocation();
  return (
    <Fragment>
      <motion.div
        initial={{ x: 60 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="min-h-screen bg-primary fixed right-0 p-2 mr-2 sm:p-3 sm:mr-4 flex flex-col justify-evenly">
          {MENU_ITEMS.map(({ id, path, ...item }) => (
            <Link key={id} to={path}>
              <div className="relative flex group">
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-500 h-12 w-12 sm:h-16 sm:w-16 -ml-4 sm:-ml-5 rounded-full ${
                    location.pathname === path
                      ? "bg-secondary"
                      : "group-hover:bg-secondary"
                  }`}
                />
                <FontAwesomeIcon
                  {...item}
                  className={`h-5 w-5 sm:h-7 sm:w-7 transition-all ease-in-out duration-500 ${
                    location.pathname === path
                      ? "text-primary -translate-x-4 sm:-translate-x-5"
                      : "text-secondary group-hover:text-primary group-hover:-translate-x-4 sm:group-hover:-translate-x-5"
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </Fragment>
  );
}
