import React, { useState } from "react";

function ToDoItem({ todo, setToDos }) {
  const [completed, setCompleted] = useState(false);

  function handleCompleteUncomplete() {
    setCompleted(!completed);
  }

  function handleDelete() {
    console.log("click", todo.id);
    fetch(`http://localhost:3000/toDo/${todo.id}`, {
      method: "DELETE",
    });

    setToDos((currentToDos) =>
      currentToDos.filter((oneToDo) => oneToDo.id !== todo.id)
    );
  }
  return (
    <div className="todo">
      <div className="todoitem">{todo.task}</div>
      <div className="duedate">{todo.dueDate}</div>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      {completed ? (
        <button onClick={handleCompleteUncomplete}>Complete</button>
      ) : (
        <button onClick={handleCompleteUncomplete}>Mark As Completed</button>
      )}
    </div>
  );
}

export default ToDoItem;
