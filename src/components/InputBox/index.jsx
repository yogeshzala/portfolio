import React from "react";

export default function InputBox(props) {
  return (
    <section>
      <input
        type={props.text}
        placeholder={props.placeholder}
        className="font-concertOne text-primary text-sm sm:text-lg w-full bg-transparent px-5 py-3 sm:py-4 border-2 border-primary rounded-lg placeholder-primary focus:outline-none"
      />
    </section>
  );
}
