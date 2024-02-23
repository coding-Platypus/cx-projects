import React, { useState } from "react";

import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ToDo({ toDo, removeTodo, updateTodo, index, doneTodo }) {
  const [showField, setShowField] = useState(false);
  const [text, setText] = useState(toDo.name);
  const [taskDone, setTaskDone] = useState(false);

  function doneTodo() {
    const finalValue = !taskDone;
    setTaskDone(finalValue);
    updateTodo({ ...toDo, isCompleted: finalValue }, index);
  }

  return (
    <>
      <div className="list-items-section">
        {!showField && (
          <input type="checkbox" className="check-box" onChange={doneTodo} />
        )}
        <li className={"list-item" + " " + (taskDone ? "strike" : "")}>
          {!showField && (
            <>
              <div>{toDo.name}</div>
              <div className="icon-section">
                <DeleteIcon onClick={removeTodo} />
                <EditIcon onClick={() => setShowField(true)} />
              </div>
            </>
          )}

          {showField && (
            <>
              <input
                type="text"
                id="text"
                name="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Your To-do"
              />
              <button
                type="button"
                className="btn"
                onClick={() => {
                  updateTodo({ ...toDo, name: text }, index);
                  setShowField(false);
                }}
              >
                Update Todo
              </button>
            </>
          )}
        </li>
      </div>
    </>
  );
}

export default ToDo;
