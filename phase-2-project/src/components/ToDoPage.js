import React from 'react'
import ToDoForm from "./ToDoForm"
import ToDoItem from './ToDoItem';

function ToDoPage() {
  return (
    <div>
      <div>ToDoPage</div>
      <ToDoForm />
      <ToDoItem />
    </div>
  );
}

export default ToDoPage