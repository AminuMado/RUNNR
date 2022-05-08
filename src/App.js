import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
