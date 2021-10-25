import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./style.css"

import HoofdOnderwerpen from "./components/HoofdOnderwerpen/HoofdOnderwerpenContainer";
import SubOnderwerpen from "./components/SubOnderwerpen/SubOnderwerpenContainer";
import Ervaringen from "./components/Ervaringen/ErvaringenContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/jongin-forum/" component={HoofdOnderwerpen} />
            <Route exact path="/jongin-forum/subonderwerpen/:subonderwerpenId" component={SubOnderwerpen} />
            <Route exact path="/jongin-forum/ervaringen/:ervaringenId" component={Ervaringen} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
