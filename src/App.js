import "./App.css";
import Login from "./pages/login/Login";

import { Switch, Route } from "react-router-dom";
import WorkoutList from "./pages/workoutList/WorkoutList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/workoutlist" component={WorkoutList} />
      </Switch>
    </div>
  );
}

export default App;
