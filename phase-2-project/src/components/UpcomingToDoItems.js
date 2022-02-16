import React from "react";

function UpcomingToDoItems({ toDo }) {
  return (
    <div className="upcomingToDos">
      <div /*className="upcomingToDoItem"*/>Task: {toDo.task}</div>
      <div /*className="upcomingToDoDueDate"*/>Due: {toDo.dueDate}</div>
    </div>
  );
}

export default UpcomingToDoItems;
