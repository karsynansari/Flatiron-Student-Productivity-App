import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Notepad from "./Notepad";
import ToDoPage from "./ToDoPage";

function App() {
  const [toDos, setToDos] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/toDo")
      .then((response) => response.json())
      .then(setToDos);
  }, []);
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ToDoPage toDos = {toDos}/>
      <Notepad />
    </div>
  );
}

export default App;
