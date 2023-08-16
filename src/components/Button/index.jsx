import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { ICONS } from "../../assets";

export default function Button({loading,...props}) {
  return (
    <Fragment>
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={loading}
        {...props}
        className={`leading-none sm:leading-none px-6 sm:px-10 h-9 sm:h-12 text-base sm:text-xl bg-transparent text-primary font-concertOne border-primary border-2 rounded-lg hover:text-secondary hover:bg-primary duration-500 transition-colors focus:outline-none self-start ${props.className}`}
      >
        {props.text} {props.icon}{" "}
        {loading && (
          <FontAwesomeIcon icon={ICONS.Spinner} className="animate-spin" />
        )}
      </button>
    </Fragment>
  );
}
