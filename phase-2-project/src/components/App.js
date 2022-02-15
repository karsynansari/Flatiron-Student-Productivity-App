// import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Notepad from "./Notepad";
import ToDoPage from "./ToDoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ToDoPage />
      <Notepad />
    </div>
  );
}

export default App;
