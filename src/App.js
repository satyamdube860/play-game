import { Route } from "react-router";
import { Router, Switch } from "react-router-dom";

import history from "./history";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import signIn from "./components/signIn";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/signin" exact component={signIn} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
