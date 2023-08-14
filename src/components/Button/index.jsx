import React from "react";

export default function Button(props) {
  return (
    <section>
      <button
        type={props.type}
        onClick={props.onClick}
        className="px-6 sm:px-10 py-1 sm:py-2 text-lg sm:text-xl bg-secondary text-primary font-concertOne border-primary border-2 rounded-lg hover:text-secondary hover:bg-primary duration-500 focus:outline-none"
      >
        {props.text}
      </button>
    </section>
  );
}
