import React, { useState } from "react";

import "./App.css";

function Box({ children }) {
  const [clicked, setClicked] = useState(1);
  const [color, setColor] = useState("darkmagenta");
  const [removeBox, setRemoveBox] = useState(false);

  function handleBoxClick() {
    setClicked(clicked + 1);
    if (clicked === 3) {
      setRemoveBox(true);
    } else if (clicked === 2) {
      setColor("red");
    } else {
      setColor("green");
    }
  }

  return (
    <>
      {!removeBox && (
        <div
          className="box"
          style={{ backgroundColor: color }}
          id={children}
          onClick={handleBoxClick}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Box;
