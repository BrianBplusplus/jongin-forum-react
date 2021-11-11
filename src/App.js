import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.css";

import HoofdOnderwerpen from "./components/HoofdOnderwerpen/HoofdOnderwerpenContainer";
import SubOnderwerpen from "./components/SubOnderwerpen/SubOnderwerpenContainer";
import Ervaringen from "./components/Ervaringen/ErvaringenContainer";

function App() {
  return (
    <BrowserRouter basename="/forum">
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={HoofdOnderwerpen} />
            <Route exact path="/subonderwerpen/:subonderwerpenId" component={SubOnderwerpen} />
            <Route exact path="/ervaringen/:ervaringenId" component={Ervaringen} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
