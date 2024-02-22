import React, { useState } from "react";

import "./App.css";

function Box({ children, removeBox }) {
  const [clicked, setClicked] = useState(0);
  const [color, setColor] = useState("darkmagenta");

  function handleBoxClick() {
    const newClicked = clicked + 1;
    setClicked(newClicked);

    if (newClicked === 3) {
      removeBox();
    } else if (newClicked === 2) {
      setColor("red");
    } else {
      setColor("green");
    }
  }

  return (
    <>
      <div
        className="box"
        style={{ backgroundColor: color }}
        id={children}
        onClick={handleBoxClick}
      >
        {children}
      </div>
    </>
  );
}

export default Box;
