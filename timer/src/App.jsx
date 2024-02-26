import { useState } from "react";

import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <Timer start={5} end={10} />
        <Timer start={0} end={20} />
        <Timer start={1} end={30} />
        <Timer start={6} end={10} />
      </div>
    </>
  );
}

export default App;
