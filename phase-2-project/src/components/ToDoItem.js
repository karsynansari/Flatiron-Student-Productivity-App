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
    <li className="todo">
      <div>
        <h3 className="todoitem">Task: {todo.task}</h3>
        <h3 className="duedate">Due: {todo.dueDate}</h3>
      </div>
      <div>
        <button className="delete-todo" onClick={handleDelete}>
          Delete
        </button>
        {completed ? (
          <button onClick={handleCompleteUncomplete}>Complete</button>
        ) : (
          <button className="complete-todo" onClick={handleCompleteUncomplete}>
            Mark As Completed
          </button>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;
