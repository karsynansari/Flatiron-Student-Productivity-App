import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

function ToDoPage({ toDos, setToDos }) {
  const eachToDo = toDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />);
  return (
    <div>
      <div>ToDoPage</div>
      <ToDoForm setToDos={setToDos}/>
      <ul> {eachToDo}</ul>
    </div>
  );
}

export default ToDoPage;