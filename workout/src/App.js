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
import EditExercise from './components/EditExercise';
import { createBrowserHistory } from 'history';
import {Today, Weekday} from "./components/TodayAndID";

// Contexts 
import {WorkoutContext} from "./contexts/WorkoutContext";

// Adding private route and axiosWithAuth, which must be used for components that require the user to be log-in 
import PrivateRoute from "./components/PrivateRoute";
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
  const [workoutsArray, setWorkoutsArray] = useState([]);
  console.log("Workouts array in app ", workoutsArray);

  const getWorkouts = () => {
    return axiosWithAuth()
      .get(`https://lifting-weights-java.herokuapp.com/workouts/all`) // end point to return all previous workouts
      .then(res => {
        console.log('Get request from endpoint "/workouts/all" successful ', res.data);
        setWorkoutsArray(res.data);
      })
      .catch(err => console.log("Get request failed b/c ", err.response));
    }

    useEffect(() => {
      getWorkouts();
    }, []);

    // THIS IS THE CREATION OF THE NEW WORKOUT LANDING ZONE TO WHICH EXERCISES CAN BE ADDED
    console.log(typeof(Today()))
    console.log(typeof(Weekday()))
    // console.log(typeof(`${Today()}  ${Weekday()}`)
    const [trigger, setTrigger] = useState("")
    const [workout, setWorkout]= useState({"workoutname": `${Today()} - ${Weekday()}`, "workoutlength" : "" })
    const [user, setUser] = useState({});
    // const [workout, setWorkout]= useState({"workoutname": "today **this needs to be replaced with code one line above***" })
    const newWorkoutTrigger = () => {
        setTrigger(trigger => trigger += "1")
    }
    useEffect(() => {
        
        axiosWithAuth(user)
        .post(`https://lifting-weights-java.herokuapp.com/workouts/current/${user.username}`, workout)
        .then(results => {
          setWorkout(results.data)
          setUser(results.data.user)
          console.log("IT DID post workout submission to endpoint '/workouts/current/{username}' correctly", results, workout)
        })
        .catch(error =>{
            console.log("error, did not post workout submission to endpoint '/workouts/current/{username}' correctly", error)
        })        
    }, [trigger])
      // THIS IS THE USE STATE WHERE THE EXERCISE ID IS BEING KEPT --> IT IS BEING GENERATED IN ADD EXERCISE LINE93
      const[exerciseid, setExerciseid]= useState("'nope, just an empty string'")
      console.log("addExercise.js passed up reults to app.js correctly?", exerciseid)
  return (
    <WorkoutContext.Provider value={{ workoutsArray }}>
      <div className="App">
        <AppNav>
          <Link to="/">
            <h1>Weight Lifting</h1>
          </Link>
          <MobileMenu newWorkoutTrigger={newWorkoutTrigger} ></MobileMenu>
        </AppNav>
        <Router history={history}>

        <Route exact path="/" render={(props) => <GetStarted {...props} newWorkoutTrigger={newWorkoutTrigger}/>} />

        <Route path="/login" render={(props) => <Login setUser={setUser}/>} />
        <Route path="/signup" component={SignUp} />
        <Route path="/add-exercise" render={(props) => <AddExercise {...props} setExerciseid={setExerciseid} workoutid={workout.workoutid} />  }/>
        <Route path="/edit-exercise" render={(props) => <EditExercise {...props} exerciseid={exerciseid.data.exerciseid}/>  }/>
        <Route path="/today" render={(props) => <CurrentWorkout {...props} workout={workout} />  }/>
        <Route path="/history" render={(props) => <PreviousWorkout {...props} />  }/>

        {/* <PrivateRoute component={AddExercise} path="/add-exercise" render={(props) => <AddExercise {...props} workoutid={workout.workoutid} />  }/>
        <PrivateRoute component={CurrentWorkout} path="/today" render={(props) => <CurrentWorkout {...props} workout={workout} />  }/>
        <PrivateRoute component={GetStarted} exact path="/" render={(props) => <GetStarted {...props} newWorkoutTrigger={newWorkoutTrigger}/>} />
        <PrivateRoute component={PreviousWorkout} path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
        </Router>
      </div>
    </WorkoutContext.Provider>
  );
}

export default App;