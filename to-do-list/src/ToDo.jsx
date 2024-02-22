import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ToDo({ toDo, removeTodo, updateTodo, index, doneTodo }) {
  const [showField, setShowField] = useState(false);
  const [text, setText] = useState(toDo.name);

  return (
    <>
      <li>
        <input type="checkbox" onChange={doneTodo} />
        {toDo.name} <DeleteIcon onClick={removeTodo} />
        <EditIcon onClick={() => setShowField(true)} />
        <br />
        {showField && (
          <>
            <input
              type="text"
              id="text"
              name="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              type="button"
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
    </>
  );
}

export default ToDo;
