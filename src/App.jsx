// SET UP TANSTACK QUERY
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Vitals from "./pages/VitalsPage";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vitals" component={Vitals} />
      </Switch>
    </Router>
  );
}
