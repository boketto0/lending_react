import './App.css';
import MainBlock from './blocks/MainBlock';
import ButtonTime from './blocks/Components/Button/ButtonTime';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return(
    <div>
      <Router>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/task1">Task1</a>
          </li>
        </ul>
            <Switch>
              <Route exact path="/task1" component={ButtonTime}/>
              <Route exact path="/" component={MainBlock}/>
            </Switch>
      </Router>
    </div>
  )
}

export default App;
