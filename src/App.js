import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WeekForecast from "./components/WeekForecast";
import DailyForecast from "./components/DailyForecast";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={WeekForecast} />
          <Route path="/hourly/:date" component={DailyForecast} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
