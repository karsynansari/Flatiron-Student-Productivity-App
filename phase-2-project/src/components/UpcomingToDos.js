import React from "react";
import UpcomingToDoItems from "./UpcomingToDoItems";

function UpcomingToDos({ toDos }) {
  let today = new Date();
  // let toDosByDate = toDos.map((toDoItem) => <UpcomingToDoItems key={toDoItem.id} toDoItem={toDoItem}/>);
  let toDosByDate = toDos.filter((toDo) => {
    let taskDueDate = new Date(toDo.dueDate);
    let diffSecs = taskDueDate.getTime() - today.getTime();
    let diffDays = diffSecs / (1000 * 3600 * 24);
    return diffDays <= 5 && diffDays > 0;
  });

  let eachToDoByDate = toDosByDate.map((toDo) => (
    <UpcomingToDoItems key={toDo.id} toDo={toDo} />
  ));

  console.log("upcoming todos");
  console.log(eachToDoByDate);

  return (
    <div className="upcoming-todos">
      <h2>Due in the next 5 days:</h2>
      <div>{eachToDoByDate}</div>
    </div>
  );
}

export default UpcomingToDos;
