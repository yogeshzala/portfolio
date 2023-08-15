import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

import { motion } from "framer-motion";
import { IMAGES } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLinks } from "../../utils/constant";

export default function Home() {
  const { navigate } = useContext(AppContext);

  return (
    <div className="min-h-screen py-5 sm:py-14 lg:py-20 flex justify-center items-center gap-4 sm:gap-10 max-lg:flex-wrap">
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-44 sm:w-80"
        src={IMAGES.Logo}
        alt="logo"
      />
      <div className="flex flex-col gap-1">
        <p className="font-concertOne text-4xl sm:text-7xl text-primary mb-4">
          Hi,
        </p>
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-3xl sm:text-6xl font-monoton flex gap-5"
        >
          <Heading text="I'm" /> <Heading text="Yogesh" />
        </motion.h1>
        <p className="font-concertOne text-3xl sm:text-6xl text-primary">
          On a way to be creative.
        </p>
        <p className="font-concertOne text-lg sm:text-3xl text-white mt-1">
          I am a full stack developer from Gujarat, India.
        </p>
        <div className="flex justify-between mt-8 flex-wrap gap-5">
          <Button
            text="Hire me"
            onClick={() => {
              navigate("/contactMe");
            }}
          />
          <div className="flex gap-5 items-center self-end select-none">
            {SocialLinks.map(({ id, ...link }) => (
              <a {...link} key={id}>
                <FontAwesomeIcon
                  {...link}
                  className="h-8 sm:h-9 text-primary hover:-translate-y-2 duration-500 cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
