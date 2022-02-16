import React from "react";
import UpcomingToDoItems from "./UpcomingToDoItems";

// let today = new Date().toISOString().slice(0, 10);
// console.log(today);
function UpcomingToDos({toDos}) {

  let toDosByDate = toDos.map((toDoItem) => <UpcomingToDoItems key={toDoItem.id} toDoItem={toDoItem}/>);
  // let toDosByDate = toDos.filter(
  //   (toDo) => toDo.dueDate >= today && toDo.dueDate <= today + 5
  // );
  // console.log(toDosByDate)
  
  return (
    <div>
      <h2>Upcoming ToDos</h2>
      <div>{toDosByDate}</div>
    </div>
  );
}

export default UpcomingToDos;
