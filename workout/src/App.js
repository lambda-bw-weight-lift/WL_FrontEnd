import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import styled from "styled-components"

import MobileMenu from "./components/MobileMenu";

import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PreviousWorkout from "./components/PreviousWorkout";
import PreviousWorkoutCard from "./components/PreviousWorkoutCard";
import CurrentWorkout from "./components/CurrentWorkout";
import CurrentWorkoutCard from "./components/CurrentWorkoutCard";
import AddExercise from "./components/AddExercise";

// Adding private route, which must be used for components that require the user to be log-in 
import PrivateRoute from "./components/PrivateRoute";

const AppNav = styled.nav`
  background-color: dodgerblue;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4% 0 4%;
  
`;


function App() {
  return (
    <div className="App">
      <AppNav>
        <h1>Weight Lifting</h1>
        <MobileMenu></MobileMenu>
      </AppNav>
      <Route exact path="/" component={GetStarted} />
      <Route path="login" component={Login} />
      <Route path="signup" component={SignUp} />
      <Route path="/add-exercise" render={(props) => <AddExercise {...props} />  }/>
      <Route path="/today" render={(props) => <CurrentWorkout {...props} />  }/>
      <Route path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
    

      {/* <PrivateRoute path="/today" render={(props) => <CurrentWorkout {...props} />  }/>
      <PrivateRoute path="/history" render={(props) => <PreviousWorkout {...props} />  }/>
      <PrivateRoute path="/add-exercise" render={(props) => <AddExercise {...props} />  }/> */}
    </div>
  );
}

export default App;
