import React from "react";
import Heading from "../../components/Heading";

import ProgressBar from "../../components/ProgressBar";

export default function Skills() {
  return (
    <section>
      <div className="min-h-screen py-10 sm:py-20 px-6 sm:px-11 md:px-16 lg:px-16 xl:px-28 flex flex-col justify-evenly">
        <div className="flex gap-3 text-3xl sm:text-6xl text-red-600 font-concertOne mb-4 sm:mb-12">
          <Heading text="Skills" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 xl:gap-28 w-full">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p className="text-red-600 font-concertOne text-2xl sm:text-5xl flex gap-1">
              <span className="text-white text-2xl sm:text-5xl">(</span>Front
              End
              <span className="text-white text-2xl sm:text-5xl">)</span>
            </p>
            <ProgressBar text="HTML / CSS" value="90" />
            <ProgressBar text="JavaScript" value="80" />
            <ProgressBar text="React.js" value="75" />
            <ProgressBar text="Tailwind CSS" value="70" />
            <ProgressBar text="Angular" value="45" />
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 mt-2 sm:mt-3">
            <p className="text-red-600 font-concertOne text-2xl sm:text-5xl flex gap-1">
              <span className="text-white text-2xl sm:text-5xl">(</span>Back End
              <span className="text-white text-2xl sm:text-5xl">)</span>
            </p>
            <ProgressBar text="Node.js" value="60" />
            <ProgressBar text="Express.js" value="55" />
            <ProgressBar text="MySql" value="50" />
            <ProgressBar text="Sequelize (ORM)" value="45" />
          </div>
        </div>
      </div>
    </section>
  );
}
