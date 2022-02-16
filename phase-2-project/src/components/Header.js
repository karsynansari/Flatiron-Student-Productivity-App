import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Notepad from "./Notepad";
import ToDoPage from "./ToDoPage";
import HomePage from "./HomePage";

function Header() {
  const [page, setPage] = useState("/");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toDo")
      .then((response) => response.json())
      .then(setToDos);
  }, []);
  function getCurrentPage() {
    switch (page) {
      case "/":
        return <HomePage toDos={toDos} />;
      case "/todos":
        return <ToDoPage toDos={toDos} setToDos={setToDos}/>;
      case "/notepad":
        return <Notepad />;
      default:
        return <h1>404 not found</h1>;
    }
  }

  return (
    <div>
      <h1>Flatiron School Productivity App</h1>
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
    </div>
  );
}

export default Header;
