import React from "react";
import Heading from "../../components/Heading";

import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

const onSubmit = () => {
  document.getElementById("form").reset();
};

export default function Contact() {
  return (
    <section>
      <div className="min-h-screen p-10 sm:py-20 max-sm:px-6 max-md:px-11 max-lg:px-16 lg:pl-16 xl:pl-28 flex flex-col justify-evenly">
        <div className="flex gap-3 text-3xl sm:text-6xl text-red-600 font-concertOne mb-4 sm:mb-12">
          <Heading text="Contact" /> <Heading text="Me" />
        </div>
        <div className="grid grid-cols-1 grid-flow-dense lg:grid-cols-2 w-full">
          <motion.form
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-8 max-lg:order-2"
            id="form"
          >
            <InputBox type="text" placeholder="Name" />
            <InputBox type="email" placeholder="Email" />
            <textarea
              rows="10"
              placeholder="Message"
              className="w-full px-5 py-3 sm:py-4 font-concertOne text-lg text-red-600 bg-slate-950 border-2 border-red-600 rounded-lg focus:outline-none placeholder-red-600"
            ></textarea>
            <Button type="button" text="Send" onClick={onSubmit} />
          </motion.form>
          <div className="flex items-center justify-center px-2 mt-20 lg:mt-0 max-lg:order-1">
            <EnvelopeIcon className="w-52 sm:w-96 text-red-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
