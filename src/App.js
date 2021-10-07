import logo from "./logo.svg";
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
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={"/"}>HoofdOnderwerpen</Link>
          <Link to={"/subonderwerpen"}>Subonderwerpen</Link>
          <Link to={"/ervaringen"}>Ervaringen</Link>
          <Switch>
            <Route exact path="/" component={HoofdOnderwerpen} />
            <Route exact path="/subonderwerpen" component={SubOnderwerpen} />
            <Route exact path="/ervaringen" component={Ervaringen} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
