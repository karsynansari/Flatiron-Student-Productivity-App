import React from "react";

function ToDoItem({ todo, setToDos }) {
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
    <li className='"todo'>
      <div className="todoitem">{todo.task}</div>
      <div className="duedate">{todo.dueDate}</div>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      {/* <button className="complete">Complete</button> */}
    </li>
  );
}

export default ToDoItem;
