import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import UnitsPage from "./components/UnitsPage";
import UnitDetailPage from "./components/UnitDetailPage";

function App() {
  return (
    <Router basename={"/"}>
    <div className="App">
<Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
            <Route
            exact
            path="/unitsPage"
            component={UnitsPage}
          />
            <Route
            exact
            path="/unitDetailPage"
            component={UnitDetailPage}
          />
</Switch>
    </div>
    </Router>
  );
}

export default App;
