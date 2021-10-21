import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import HoofdOnderwerpen from "./components/HoofdOnderwerpen/HoofdOnderwerpenContainer";
import SubOnderwerpen from "./components/SubOnderwerpen/SubOnderwerpenContainer";
import Ervaringen from "./components/Ervaringen/ErvaringenContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <button>
            <Link to={"/"}>Home</Link>
          </button>
          <br></br>
          <br></br>
          <Switch>
            <Route exact path="/" component={HoofdOnderwerpen} />
            <Route exact path="/subonderwerpen/:subonderwerpenId" component={SubOnderwerpen} />
            <Route exact path="/ervaringen/:ervaringenId" component={Ervaringen} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
