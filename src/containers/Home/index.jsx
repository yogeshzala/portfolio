import React, { useContext } from "react";
import { AppContext } from "../../App";

import linkedin from "../../assets/images/social-icons/linkedin.png";
import github from "../../assets/images/social-icons/github.png";
import twitter from "../../assets/images/social-icons/twitter.png";
import instagram from "../../assets/images/social-icons/instagram.png";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

import logo from "../../assets/images/logo.png";

import { motion } from "framer-motion";

export default function Home() {
  const { navigate } = useContext(AppContext);

  return (
    <section>
      <div className="min-h-screen flex justify-center gap-4 sm:gap-10 items-center px-6 sm:px-10 py-10 max-lg:flex-wrap">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-44 sm:w-80"
          src={logo}
          alt="logo"
        />
        <div className="flex flex-col gap-1">
          <p className="font-concertOne text-4xl sm:text-7xl text-red-600 mb-4">
            Hi,
          </p>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-red-600 text-3xl sm:text-6xl font-monoton flex gap-5"
          >
            <Heading text="I'm" /> <Heading text="Yogesh" />
          </motion.h1>
          <p className="font-concertOne text-3xl sm:text-6xl text-red-600">
            On a way to be creative.
          </p>
          <p className="font-concertOne text-lg sm:text-3xl text-white mt-1">
            I am a full stack developer from Gujarat, India.
          </p>
          <div className="flex justify-between mt-8 flex-wrap gap-5">
            <Button
              text="Hire me"
              onClick={() => {
                navigate("/contact");
              }}
            />
            <div className="flex gap-5 items-center self-end">
              <img
                className="h-9 hover:-translate-y-2 duration-500 cursor-pointer"
                src={linkedin}
                alt="linkedin"
              />
              <img
                className="h-10 hover:-translate-y-2 duration-500 cursor-pointer"
                src={github}
                alt="github"
              />
              <img
                className="h-9 hover:-translate-y-2 duration-500 cursor-pointer"
                src={twitter}
                alt="twitter"
              />
              <img
                className="h-9 hover:-translate-y-2 duration-500 cursor-pointer"
                src={instagram}
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
