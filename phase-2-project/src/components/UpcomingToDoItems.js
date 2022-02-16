
import React from 'react'

function UpcomingToDoItems({toDoItem}) {
  return (
    <div className="upcomingToDos">
      <div /*className="upcomingToDoItem"*/>Task: {toDoItem.task}</div>
      <div /*className="upcomingToDoDueDate"*/>Due: {toDoItem.dueDate}</div>
    </div>
  );
}

export default UpcomingToDoItems