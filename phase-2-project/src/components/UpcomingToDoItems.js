import React from "react";

function UpcomingToDoItems({ toDo }) {
  return (
    <div className="upcomingToDos">
      <span className="upcomingItems">
        <div>{toDo.task}</div>
        <div>
          Due: <span className="due-soon">{toDo.dueDate}</span>
        </div>
      </span>
    </div>
  );
}

export default UpcomingToDoItems;
