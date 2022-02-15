import "./App.css";
// import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Notepad from "./Notepad";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Header />
        {/* <Switch>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/todos">
          <Todos />
        </Route>
        <Route exact path="/notepad">
          <Notepad />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
