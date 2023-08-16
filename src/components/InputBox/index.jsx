import React, { Fragment } from "react";

export default function InputBox({ error, ...props }) {
  return (
    <Fragment>
      <div>
        <input
          type={props.text}
          placeholder={props.placeholder}
          className="font-concertOne text-primary text-sm sm:text-lg w-full bg-transparent px-4 sm:px-5 h-11 sm:h-14 border-2 border-primary rounded-lg placeholder-primary focus:outline-none"
          {...props}
        />
        {error && <p className="text-primary text-sm mt-1 ml-4 sm:ml-5">{error}</p>}
      </div>
    </Fragment>
  );
}
