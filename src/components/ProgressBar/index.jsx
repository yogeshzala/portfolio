import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function ProgressBar(props) {
  return (
    <Fragment>
      <div>
        <p className="text-white text-xl sm:text-2xl font-concertOne mb-3 ml-1">
          {props.title}
        </p>
        <div className="h-5 sm:h-7 rounded-md sm:rounded-lg w-full border-2 border-primary bg-transparent overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${props.value}%` }}
            transition={{ duration: 2 }}
            className="h-full rounded-[3px] sm:rounded-md bg-primary"
          ></motion.div>
        </div>
      </div>
    </Fragment>
  );
}
