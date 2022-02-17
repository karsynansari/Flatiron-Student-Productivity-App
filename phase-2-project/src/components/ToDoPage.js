import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
function ToDoPage({ toDos, setToDos }) {
  const [hideCompletedButton, setHideCompletedButton] = useState(false);

  function handleHideCompletedButton() {
    setHideCompletedButton((hideCompletedButton) => !hideCompletedButton);
    //  console.log("test");
  }

  const eachToDo = toDos.map((todo) => (
    <ToDoItem
      key={todo.id}
      todo={todo}
      setToDos={setToDos}
      hideCompletedButton={hideCompletedButton}
      handleHideCompletedButton={handleHideCompletedButton}
    />
  ));

  return (
    <div>
      <ToDoForm setToDos={setToDos} />
      <br />
      <button
        className="hide-completed-button"
        onClick={handleHideCompletedButton}
      >
        {hideCompletedButton
          ? "Hide Completed ToDo's"
          : "Show Completed ToDo's"}
      </button>
      <ul> {eachToDo}</ul>
    </div>
  );
}

export default ToDoPage;
