import './App.css';
import Home from './Home';
import Task1 from "./Task1";
import Task2 from "./Task2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

  function App() {
  
    return (
      <div>
        <Router>
          <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
              <a href="/task1">Task1</a>
            </li>
            <li>
              <a href="/task2">Task2</a>
            </li>
          </ul>
            <Switch>
              <Route exact path="/task1" component={Task1}/>
              <Route exact path="/task2" component={Task2}/>
              <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
      </div>
    );
}

  export default App;

