import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);

  function addBox() {
    setCount(count + 1);
    let allBoxes = [...boxes, count + 1];
    setBoxes(allBoxes);
  }

  return (
    <>
      <button id="button" onClick={addBox}>
        Add Box
      </button>
      <div className="boxContainer">
        {boxes.map((boxCount, index) => (
          <Box key={index}>{boxCount}</Box>
        ))}
      </div>
    </>
  );
}

export default App;
