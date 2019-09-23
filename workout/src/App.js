import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';

import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PreviousWorkout from "./components/PreviousWorkout";
import PreviousWorkoutCard from "./components/PreviousWorkoutCard";
import CurrentWorkout from "./components/CurrentWorkout";
import CurrentWorkoutCard from "./components/CurrentWorkoutCard";
import AddExercise from "./components/AddExercise";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={GetStarted} />
    <Route path="/today" render={(props) => <CurrentWorkout {...props} />  }/>
    <Route path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
    
    </div>
  );
}

export default App;
