import React from "react";

export default function Button(props) {
  return (
    <section>
      <button
        type={props.type}
        onClick={props.onClick}
        className="px-10 py-2 bg-slate-950 text-red-600 text-xl font-concertOne border-red-600 border-2 rounded-lg hover:text-slate-950 hover:bg-red-600 duration-500 focus:outline-none"
      >
        {props.text}
      </button>
    </section>
  );
}
