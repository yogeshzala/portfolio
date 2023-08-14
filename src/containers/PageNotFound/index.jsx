import React, { useContext } from "react";
import Heading from "../../components/Heading";
import { AppContext } from "../../App";

export default function PageNotFound() {
  const { navigate } = useContext(AppContext);

  return (
    <section>
      <div className="min-h-screen bg-slate-950 flex justify-center items-center max-sm:px-4 py-10">
        <div className="flex flex-col items-center gap-5 sm:gap-10">
          <h1 className="text-red-600 text-6xl sm:text-9xl font-bold font-concertOne animate-bounce">
            <Heading text="404" />
          </h1>
          <p className="text-red-600 text-2xl sm:text-5xl font-bold font-concertOne">
            Oops, Page Not Found
          </p>
          <div className="flex items-center gap-3 text-white hover:text-red-600 cursor-pointer hover:scale-110 duration-200">
            {/* <ArrowLeftCircleIcon className="w-4 sm:w-6" /> */}
            <p
              className="font-concertOne text-base sm:text-2xl"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back to Site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
