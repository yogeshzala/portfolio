import React, { useEffect, useState } from "react";

export default function Heading(props) {
  const [text, setText] = useState([]);

  useEffect(() => {
    setText(Array.from(props.text));
  }, [props.text]);

  return (
    <div className="flex">
      {text.map((char, i) => {
        return (
          <p key={i} className="hover:-translate-y-2 duration-500">
            {char}
          </p>
        );
      })}
    </div>
  );
}
