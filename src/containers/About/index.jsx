import React from "react";
import Heading from "../../components/Heading";

import { CubeTransparentIcon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

export default function About() {
  const container = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.5 },
    },
  };

  const paragraph = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.8 },
  };

  return (
    <section>
      <div className="min-h-screen py-10 sm:py-20 max-sm:px-6 max-md:px-11 max-lg:px-16 lg:pl-16 xl:pl-28 flex flex-col justify-evenly">
        <div className="flex gap-3 text-3xl sm:text-6xl text-red-600 font-concertOne mb-4 sm:mb-12">
          <Heading text="About" /> <Heading text="Me" />
        </div>
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 w-full"
        >
          <div className="max-lg:order-2">
            <div className="flex flex-col gap-2 sm:gap-5">
              <h3 className="font-concertOne text-xl sm:text-4xl text-red-600">
                Full Stack Developer
              </h3>
              <div className="flex flex-col gap-2 sm:gap-3">
                <motion.p
                  variants={paragraph}
                  transition="transition"
                  className="font-concertOne text-sm sm:text-xl text-white"
                >
                  I am a full stack developer with expertise in React.js and
                  Node.js, I bring a wealth of technical knowledge and
                  creativity to my work. I am skilled at building cutting-edge
                  web applications that deliver exceptional user experiences,
                  and I am always eager to take on new challenges and push the
                  boundaries of what's possible in web development.
                </motion.p>
                <motion.p
                  variants={paragraph}
                  transition="transition"
                  className="font-concertOne text-sm sm:text-xl text-white"
                >
                  In addition to my technical skills, I am a proactive learner,
                  always staying updated with the latest industry trends and
                  best practices. I am also an excellent problem solver, capable
                  of identifying and resolving complex technical issues
                  efficiently.
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 mt-4 sm:mt-12">
              <h3 className="font-concertOne text-xl sm:text-4xl text-red-600">
                Personal Info.
              </h3>
              <motion.div
                variants={paragraph}
                transition="transition"
                className="flex flex-col gap-2 sm:gap-3"
              >
                <p className="font-concertOne text-sm sm:text-xl text-white">
                  Name : Yogesh Zala
                </p>
                <p className="font-concertOne text-sm sm:text-xl text-white">
                  Age : 21
                </p>
                <p className="font-concertOne text-sm sm:text-xl text-white">
                  Email : yogeshzala1511@gmail.com
                </p>
                <p className="font-concertOne text-sm sm:text-xl text-white">
                  Location : Ahmedabad, Guajarat, India
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 mb-8 max-lg:order-1">
            <motion.div
              initial={{ y: 15 }}
              animate={{ y: -5 }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
              }}
            >
              <CubeTransparentIcon className="w-52 sm:w-96 text-red-600" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
