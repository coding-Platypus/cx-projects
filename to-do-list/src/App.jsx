import { useState } from "react";
import "./App.css";

import ToDo from "./ToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [deleteTask, setDeleteTask] = useState(false);
  let completedTaskCount = toDos.filter((item) => item.isCompleted).length;

  function addToDo() {
    let newCount = count + 1;
    setCount(newCount);

    const updatedToDo = [
      ...toDos,
      { id: count, name: text, isCompleted: false },
    ];
    // console.log(updatedToDo);
    setToDos(updatedToDo);
    setText("");
  }

  function removeTodo(toDoId) {
    setDeleteTask(true);
    const updatedTodo = toDos.filter((_, index) => index !== toDoId);
    let newCount = count - 1;
    setCount(newCount);
    setToDos(updatedTodo);
  }

  function updateTodo(toDo, index) {
    let newTodo = [...toDos];
    newTodo[index] = toDo;
    setToDos(newTodo);
  }

  return (
    <>
      <h3>To-Dos</h3>
      <form>
        <div className="todo-section">
          <br />
          <input
            type="text"
            id="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Your To-do..."
            value={text}
          />
        </div>
        <div className="button-section">
          <button className="btn" type="button" onClick={addToDo}>
            Add Task
          </button>
        </div>
      </form>
      <div className="to-do-list-section">
        {toDos.length > 0 && <h3>Your To-Dos</h3>}

        <ul
          className={
            "list-items" + " " + (toDos.length > 0 ? "border-class" : "")
          }
        >
          {toDos.map((toDo, index) => (
            <ToDo
              key={toDo.id}
              index={index}
              toDo={toDo}
              removeTodo={() => removeTodo(index)}
              updateTodo={updateTodo}
              doneTodo={() => doneTodo(index)}
            />
          ))}
        </ul>
        <p>Total Task: {count}</p>
        <p>Completed Task: {completedTaskCount}</p>
      </div>
    </>
  );
}

export default App;
