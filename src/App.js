import React, { useState, useEffect } from 'react';
import { Route, Link, Router } from "react-router-dom";
import './App.css';
import styled from "styled-components";

import MobileMenu from "./components/MobileMenu";

import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PreviousWorkout from "./components/PreviousWorkout";
import CurrentWorkout from "./components/CurrentWorkout";
import SpecificWorkout from "./components/SpecificWorkout"
// import CurrentWorkoutCard from "./components/CurrentWorkoutCard";
import AddExercise from "./components/AddExercise";
import EditExercise from './components/EditExercise';
import { createBrowserHistory } from 'history';
import { Today, Weekday } from "./components/TodayAndID";

// Contexts 
import { WorkoutContext } from "./contexts/WorkoutContext";

// Adding private route and axiosWithAuth, which must be used for components that require the user to be log-in 
import axiosWithAuth from "./utils/axiosWithAuth";

export const history = createBrowserHistory();

const AppNav = styled.nav`
  background-color: #0069EB;
  color: white;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4% 0 4%;
  
`;


function App() {
  const [exerciseid, setExerciseid] = useState(0)
  const [workoutsArray, setWorkoutsArray] = useState([]);

  console.log("Workouts array in app ", workoutsArray);

  const getWorkouts = () => {

    return axiosWithAuth()
      .get(`https://lifting-weights-java.herokuapp.com/workouts/all`) // end point to return all previous workouts
      .then(res => {
        setWorkoutsArray(res.data);
      })
      .catch(err => console.log("Get request failed b/c ", err.response));
  }

  useEffect(() => {
    console.log("useEffect")
    getWorkouts();
    console.log("useEffectEnd")
  }, [exerciseid]);

  // THIS IS THE CREATION OF THE NEW WORKOUT LANDING ZONE TO WHICH EXERCISES CAN BE ADDED
  const [trigger, setTrigger] = useState("")
  const [workoutTitle, setWorkoutTitle] = useState({ "workoutname": `${Today()} - ${Weekday()}`, "workoutlength": "" })
  const [workout, setWorkout] = useState({})
  const [user, setUser] = useState({});

  const newWorkoutTrigger = () => {
    setTrigger(trigger => trigger += "1")
  }
  useEffect(() => {

    axiosWithAuth(user)
      .post(`https://lifting-weights-java.herokuapp.com/workouts/current/${user.username}`, workoutTitle)
      .then(results => {
        setWorkout(results.data)
        // setUser(results.data.user)   DO I NEED TO REDECLARE THE USER? IT SHOULD BE SAVED IN STATE ALREADY
        console.log("IT DID post workout submission to endpoint '/workouts/current/{username}' correctly", results)
      })
      .catch(error => {
        console.log("error, did not post workout submission to endpoint '/workouts/current/{username}' correctly", error)
      })
  }, [trigger])

  return (

    <div className="App">
      <AppNav>
        <Link to="/">
          <h1>Weight Lifting</h1>
        </Link>
        <MobileMenu newWorkoutTrigger={newWorkoutTrigger} ></MobileMenu>
      </AppNav>
      <Router history={history}>

        <Route exact path="/" render={(props) => <GetStarted {...props} newWorkoutTrigger={newWorkoutTrigger} />} />
        <Route path="/login" render={(props) => <Login {...props} setUser={setUser} />} />
        <Route path="/signup" component={SignUp} />

        <Route path="/today" render={(props) => <CurrentWorkout {...props} setExerciseid={setExerciseid} workout={workout} />} />
        <Route path="/add-exercise" render={(props) => <AddExercise {...props} setExerciseid={setExerciseid} workoutid={workout.workoutid} />} />
        <Route path="/edit-exercise" render={(props) => <EditExercise {...props} getWorkouts={getWorkouts} exerciseid={exerciseid} setExerciseid={setExerciseid} />} />
        {/* IF THIS WORKS TAKE OUT setExerciseid FROM AddExercise */}
        <Route exact path="/history" render={(props) => <PreviousWorkout {...props} workoutsArray={workoutsArray} />} />
        <Route path="history-detailed" />
      </Router>
    </div>

  );
}

export default App; 