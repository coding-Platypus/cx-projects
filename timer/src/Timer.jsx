import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer({ start, end }) {
  const [progress, setProgress] = useState(start);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const newProgress = progress + 1;
      if (newProgress <= end) {
        setProgress(newProgress);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [progress]);

  function resetTimer() {
    clearInterval(timerRef.current);
    setProgress(start);
  }

  const progressBar = (progress / end) * 100;

  return (
    <div style={{ width: "100px" }} onClick={resetTimer}>
      <CircularProgressbar value={progressBar} text={`${progress}`} />
    </div>
  );
}

export default Timer;
