import React, { useState } from "react";
const newToDoObj = {
  task: "",
  dueDate: "",
};
function Todos({ setToDos }) {
  const [newToDo, setNewToDo] = useState(newToDoObj);
  console.log(newToDo)

  function handleChange(e) {
    console.log(e.target.value);
    setNewToDo((newToDoState) => ({
      ...newToDoState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/toDo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    })
      .then((response) => response.json())
      .then((data) => setToDos((existingToDos) => [...existingToDos, data]));

      setNewToDo(newToDoObj)
  }

  return (
    <div>
      <h1>Add To-Do</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="task"
            value={newToDo.task}
            placeholder="Task.."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="dueDate"
            value={newToDo.dueDate}
            placeholder="YYYY-MM-DD"
            onChange={handleChange}
          />
        </div>
        {/* <input type="checkbox" value="checked" /> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Todos;
