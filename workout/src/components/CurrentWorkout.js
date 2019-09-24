import React, {useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PrimaryBtn, SecondaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

// Context
import {WorkoutContext} from "../contexts/WorkoutContext";


export default function CurrentWorkout (props) {
    
    const { workoutsArray } = useContext(WorkoutContext); 
    const exerciseCards = 
    return(
        <div>
            <h3>{Today()} - {Weekday()}</h3>
            {exerciseCards}
            <Link to="/add-exercise">
                <SecondaryBtn>Add Exercise</SecondaryBtn>
            </Link>
            <Link to="/history">
                <PrimaryBtn>Submit Workout</PrimaryBtn>
            </Link>
        {/* <CurrentWorkoutCard key={workout.id} {...workoutsArray} workout={workout} />  */}
        </div>
    );  
}