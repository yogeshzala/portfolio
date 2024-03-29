import React, { Fragment } from "react";
import Heading from "../../components/Heading";

import { motion } from "framer-motion";
import { IMAGES } from "../../assets";

export default function AboutMe() {
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
    transition: { duration: 0.5 },
  };

  return (
    <Fragment>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="py-5 sm:py-14 lg:py-20"
        >
          <div className="flex gap-3 text-3xl sm:text-6xl text-primary font-concertOne mb-4 sm:mb-12">
            <Heading text="About" /> <Heading text="Me" />
          </div>
          <div className="flex items-center justify-center mb-4 sm:mb-12 lg:hidden">
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: -10 }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
              }}
            >
              <img
                src={IMAGES.AboutMeVector}
                alt="AboutMeVector"
                className="w-52 sm:w-96"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5">
            <h3 className="font-concertOne text-xl sm:text-4xl text-primary">
              Full Stack Developer
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <motion.p
                variants={paragraph}
                transition="transition"
                className="font-concertOne text-sm sm:text-xl text-white"
              >
                Welcome to my portfolio website! I'm{" "}
                <span className="text-primary">Yogesh Zala</span>, a full stack
                developer with expertise in React.js and Node.js, I bring a
                wealth of technical knowledge and creativity to my work. I am
                skilled at building cutting-edge web applications that deliver
                exceptional user experiences. I am always eager to take on
                new challenges and push the boundaries of what's possible in web
                development.
              </motion.p>
              <motion.p
                variants={paragraph}
                transition="transition"
                className="font-concertOne text-sm sm:text-xl text-white"
              >
                In addition to my technical skills, I am a proactive learner,
                always staying updated with the latest industry trends and best
                practices. I am also an excellent problem solver, capable of
                identifying and resolving complex technical issues efficiently.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5 mt-4 sm:mt-12">
            <h3 className="font-concertOne text-xl sm:text-4xl text-primary">
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
                Email :{" "}
                <a
                  href="mailto:yogeshzala1511@gmail.com"
                  className="text-primary"
                >
                  yogeshzala1511@gmail.com
                </a>
              </p>
              <p className="font-concertOne text-sm sm:text-xl text-white">
                Location : Ahmedabad, Guajarat, India
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="h-screen flex items-center justify-center pl-20 max-lg:hidden sticky top-0">
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
            }}
          >
            <img
              src={IMAGES.AboutMeVector}
              alt="AboutMeVector"
              className="w-52 sm:w-96"
            />
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
}
