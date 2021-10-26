import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";

import HoofdOnderwerpen from "./components/HoofdOnderwerpen/HoofdOnderwerpenContainer";
import SubOnderwerpen from "./components/SubOnderwerpen/SubOnderwerpenContainer";
import Ervaringen from "./components/Ervaringen/ErvaringenContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/forum/" component={HoofdOnderwerpen} />
            <Route
              exact
              path="/forum/subonderwerpen/:subonderwerpenId"
              component={SubOnderwerpen}
            />
            <Route exact path="/forum/ervaringen/:ervaringenId" component={Ervaringen} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
