import React from "react";

function UpcomingToDoItems({ toDo }) {
  return (
    <div className="upcomingToDos">
      <div>Task: {toDo.task}</div>
      <div>Due: {toDo.dueDate}</div>
    </div>
  );
}

export default UpcomingToDoItems;
