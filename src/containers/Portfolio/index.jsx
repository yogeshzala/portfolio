import React from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { motion } from "framer-motion";

export default function Portfolio() {
  const cardContainer = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const card = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.6 },
  };
  return (
    <section>
      <div className="min-h-screen py-5 sm:py-14 lg:py-20">
        <div className="flex gap-3 text-3xl sm:text-6xl text-red-600 font-concertOne mb-4 sm:mb-12">
          <Heading text="Portfolio" />
        </div>
        <motion.div
          variants={cardContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-6 sm:gap-12"
        >
          <motion.div variants={card} transition="transition">
            <Card />
          </motion.div>
          <motion.div variants={card} transition="transition">
            <Card />
          </motion.div>
          <motion.div variants={card} transition="transition">
            <Card />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
