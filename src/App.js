import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HoofdOnderwerpen from "./components/HoofdOnderwerpen/HoofdOnderwerpenContainer";
import SubOnderwerpen from "./components/SubOnderwerpen/SubOnderwerpenContainer";
import Ervaringen from "./components/Ervaringen/ErvaringenContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <button>
            <Link to={"/jongin-forum"}>Home</Link>
          </button>
          <br></br>
          <br></br>
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
