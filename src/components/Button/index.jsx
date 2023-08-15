import React, { Fragment } from "react";

export default function Button(props) {
  return (
    <Fragment>
      <button
        type={props.type}
        onClick={props.onClick}
        className="leading-none sm:leading-none px-6 sm:px-10 py-[10px]
         sm:py-3 text-base sm:text-xl bg-transparent text-primary font-concertOne border-primary border-2 rounded-lg hover:text-secondary hover:bg-primary duration-500 focus:outline-none self-start"
        {...props}
      >
        {props.text}
      </button>
    </Fragment>
  );
}
