import React, {useState, useEffect} from 'react';
import {Route, Link, Router} from "react-router-dom";
import './App.css';
import styled from "styled-components";

import MobileMenu from "./components/MobileMenu";

import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PreviousWorkout from "./components/PreviousWorkout";
import CurrentWorkout from "./components/CurrentWorkout";
import CurrentWorkoutCard from "./components/CurrentWorkoutCard";
import AddExercise from "./components/AddExercise";
import { createBrowserHistory } from 'history';
import {Today, Weekday} from "./components/TodayAndID";

// Contexts 
import {WorkoutContext} from "./contexts/WorkoutContext";

// Adding private route and axiosWithAuth, which must be used for components that require the user to be log-in 
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./utils/axiosWithAuth";

export const history = createBrowserHistory();

const AppNav = styled.nav`
  background-color: dodgerblue;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4% 0 4%;
  
`;


function App() {
  const [workoutsArray, setWorkoutsArray] = useState([]);
  console.log("Workouts array in app ", workoutsArray);

  const getWorkouts = () => {
    return axiosWithAuth()
      .get(`/workouts/all`) // end point to return all previous workouts
      .then(res => {
        console.log('Get request successful ', res.data);
        setWorkoutsArray(res.data);
      })
      .catch(err => console.log("Get request failed b/c ", err.response));
    }

    useEffect(() => {
      getWorkouts();
    }, []);

    // THIS IS THE CREATION OF THE NEW WORKOUT LANDING ZONE TO WHICH EXERCISES CAN BE ADDED
    const [trigger, setTrigger] = useState(0)
    const [workout, setWorkout]= useState([{"workoutname": Today() - Weekday() }])
    const newWorkoutTrigger = () => {
        setTrigger(trigger => trigger += 1)
    }
    useEffect(() => {
        
        axiosWithAuth()
        .post("/workouts/current/{username}", workout)
        .then(results => {
            console.log(results)
        })
        .catch(error =>{
            console.log("error, did not post workout submission correctly", error)
        })        
    }, [trigger])

  return (
    <WorkoutContext.Provider value={{ workoutsArray }}>
      <div className="App">
        <AppNav>
          <Link to="/">
          <h1>Weight Lifting</h1>
          </Link>
          <MobileMenu newWorkoutTrigger={newWorkoutTrigger}></MobileMenu>
        </AppNav>
        <Router history={history}>
        <Route exact path="/" render={(props) => <GetStarted {...props} newWorkoutTrigger={newWorkoutTrigger}/>} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/add-exercise" render={(props) => <AddExercise {...props} />  }/>
        <Route path="/today" render={(props) => <CurrentWorkout {...props} workoutsArray={workoutsArray}/>  }/>
        <Route path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
        </Router>
        {/* <PrivateRoute path="/today" render={(props) => <CurrentWorkout {...props} />  }/>
        <PrivateRoute path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
        <PrivateRoute path="/add-exercise" render={(props) => <AddExercise {...props} />  }/> */}
      </div>
    </WorkoutContext.Provider>
  );
}

export default App;
