
import React from 'react'

function UpcomingToDoItems({toDoItem}) {
  return (
    <div className="upcomingToDos">
      <div className="upcomingToDoItem">{toDoItem.task}</div>
      <div className="upcomingToDoDueDate">{toDoItem.dueDate}</div>
    </div>
  );
}

export default UpcomingToDoItems