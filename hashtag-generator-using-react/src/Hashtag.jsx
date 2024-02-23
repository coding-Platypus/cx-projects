import React, { useEffect, useState } from "react";
import "./App.css";

function Hashtag({ children, copyHashtag, delay }) {
  const [backgroundColor, setBackgroundColor] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor({ backgroundColor: color });

    setTimeout(() => {
      console.log("i am delay");
      setPopup(true);
    }, delay);
  }, []);

  return (
    <>
      <p
        className={"tag" + " " + (popup ? "pop-up-animation" : "")}
        onClick={() => copyHashtag(children)}
        style={backgroundColor}
      >{`#${children}`}</p>
    </>
  );
}

export default Hashtag;
