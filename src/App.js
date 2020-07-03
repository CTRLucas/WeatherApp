import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WeekForecast from "./components/WeekForecast";
import HourlyForecast from "./components/HourlyForecast";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={WeekForecast} />
          <Route path="/hourly/:date" component={HourlyForecast} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
