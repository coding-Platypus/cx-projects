import { useState } from "react";
import "./App.css";

import ToDo from "./ToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  function addToDo() {
    let newCount = count + 1;
    setCount(newCount);

    const updatedToDo = [...toDos, { id: count, name: text }];
    // console.log(updatedToDo);
    setToDos(updatedToDo);
    setText("");
  }

  function removeTodo(toDoId) {
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

  function doneTodo(todoId) {
    const updatedTodo = toDos.filter((_, index) => index !== todoId);
    let completedTodo = completedTaskCount + 1;
    setCompletedTaskCount(completedTodo);
    setToDos(updatedTodo);
  }

  return (
    <>
      <form>
        <div className="text-section">
          <label htmlFor="text">To-Dos</label> <br />
          <input
            type="text"
            id="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="button-section">
          <button type="button" onClick={addToDo}>
            Add Task
          </button>
        </div>
      </form>
      <div className="to-do-list-section">
        <ul>
          {toDos.map((toDo, index) => (
            <ToDo
              key={index}
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
