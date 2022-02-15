import React from "react";

function ToDoItem({todo}) {
  return (
    <div className='"todo'>
      <div className="todoitem">{todo.task}</div>
      <div className="duedate">{todo.dueDate}</div>
      <button className="delete">Delete</button>   
      <button className="complete">Complete</button>
    </div>
  );
}

export default ToDoItem;
