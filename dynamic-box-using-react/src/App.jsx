import { Children, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);

  function addBox() {
    setCount(count + 1);
    let allBoxes = [...boxes, { id: count + 1, title: count + 1 }];
    setBoxes(allBoxes);
  }

  function removeBox(boxId) {
    const updatedBoxes = boxes.filter((box, index) => index !== boxId);
    setBoxes(updatedBoxes);
  }

  return (
    <>
      <button id="button" onClick={addBox}>
        Add Box
      </button>
      <div className="boxContainer">
        {boxes.map((boxCount, index) => (
          <Box key={boxCount.id} removeBox={() => removeBox(index)}>
            {boxCount.title}
          </Box>
        ))}
      </div>
    </>
  );
}

export default App;
