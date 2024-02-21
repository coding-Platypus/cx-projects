import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Click Me");
  const [styles, setStyles] = useState({
    color: "#ffffff",
    backgroundColor: "#0000ff",
    borderRadius: "0",
  });

  function handleStyles(property, newValue) {
    const newStyles = {
      ...styles,
      [property]: newValue,
    };

    setStyles(newStyles);
  }

  const customButtonStyle = {
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    borderRadius: `${styles.borderRadius}px`,
  };

  return (
    <>
      <div className="section">
        <div className="left-section">
          <form>
            <div className="text-section">
              <label htmlFor="text">Text</label>
              <br />
              <input
                type="text"
                id="text"
                name="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
            <div className="coloring-section">
              <div className="color-section">
                <label htmlFor="colorPicker">Color</label>
                <br />
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={styles.color}
                  onChange={(e) => handleStyles("color", e.target.value)}
                />
              </div>
              <div className="background-section">
                <label htmlFor="colorPicker">Background</label>
                <br />
                <input
                  type="color"
                  id="background"
                  name="background"
                  value={styles.backgroundColor}
                  onChange={(e) =>
                    handleStyles("backgroundColor", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="border-section">
              <label htmlFor="borderRadius">Border radius</label>
              <br />
              <input
                type="range"
                id="borderRadius"
                name="borderRadius"
                min="0"
                max="100"
                step="1"
                value={styles.borderRadius}
                onChange={(e) =>
                  handleStyles("borderRadius", parseInt(e.target.value))
                }
              />
            </div>
          </form>
        </div>
        <div className="right-section">
          <button id="customButton" style={customButtonStyle}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
