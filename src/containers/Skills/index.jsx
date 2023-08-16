import React, { Fragment } from "react";
import Heading from "../../components/Heading";

import ProgressBar from "../../components/ProgressBar";
import { BackEndSkills, FrontEndSkills } from "../../utils/constant";

export default function Skills() {
  return (
    <Fragment>
      <div className="min-h-screen py-5 sm:py-14 lg:py-20">
        <div className="flex gap-3 text-3xl sm:text-6xl text-primary font-concertOne mb-6 sm:mb-12">
          <Heading text="Skills" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 xl:gap-28 w-full">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p className="text-primary font-concertOne text-2xl sm:text-4xl flex gap-1">
              <span className="text-white text-2xl sm:text-4xl">(</span>Front
              End
              <span className="text-white text-2xl sm:text-4xl">)</span>
            </p>
            {FrontEndSkills.map(({ id, ...skill }) => (
              <ProgressBar key={id} {...skill} />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 mt-6 sm:mt-12 lg:mt-0">
            <p className="text-primary font-concertOne text-2xl sm:text-4xl flex gap-1">
              <span className="text-white text-2xl sm:text-4xl">(</span>Back End
              <span className="text-white text-2xl sm:text-4xl">)</span>
            </p>
            {BackEndSkills.map(({ id, ...skill }) => (
              <ProgressBar key={id} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
