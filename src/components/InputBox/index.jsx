import React from "react";

export default function InputBox(props) {
  return (
    <section>
      <input
        type={props.text}
        placeholder={props.placeholder}
        className="font-concertOne text-red-600 text-sm sm:text-lg w-full bg-slate-950 px-5 py-3 sm:py-4 border-2 border-red-600 rounded-lg placeholder-red-600 focus:outline-none"
      />
    </section>
  );
}
