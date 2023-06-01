import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar(props) {
  return (
    <section>
      <p className="text-white text-xl sm:text-3xl font-concertOne mb-3 ml-1">
        {props.text}
      </p>
      <div className="h-6 sm:h-8 rounded-lg sm:rounded-xl w-full border-2 border-red-600 bg-slate-950">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${props.value}%` }}
          transition={{ duration: 2 }}
          className="h-full rounded-md sm:rounded-lg bg-red-600"
        ></motion.div>
      </div>
    </section>
  );
}
