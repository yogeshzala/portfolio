import React from "react";

import portfolio from "../../assets/images/portfolio.jpg";

import { LinkIcon } from "@heroicons/react/24/solid";

export default function Card() {
  return (
    <section>
      <div className="text-red-600 bg-slate-950 border-2 border-red-600 rounded-xl sm:rounded-3xl flex flex-col gap-4 sm:gap-10 items-center hover:bg-red-600 hover:text-slate-950 hover:scale-105 duration-500 p-4 sm:p-10">
        <div className="relative group">
          <img
            className="rounded-xl sm:rounded-3xl group-hover:blur-[2px]"
            src={portfolio}
            alt="portfolio"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 group-hover:-translate-y-1/2 flex gap-2 sm:gap-5 font-concertOne text-base sm:text-2xl text-white opacity-0 group-hover:opacity-100 duration-500">
            <div className="flex gap-1 items-center hover:scale-105 duration-300 cursor-pointer">
              <LinkIcon className="w-3 sm:w-6" />
              <p>GitHub</p>
            </div>
            <div className="flex gap-1 items-center hover:scale-105 duration-300 cursor-pointer">
              <LinkIcon className="w-3 sm:w-6" />
              <p>Live</p>
            </div>
          </div>
        </div>
        <p className="font-concertOne text-xl sm:text-3xl">Portfolio Name</p>
      </div>
    </section>
  );
}
