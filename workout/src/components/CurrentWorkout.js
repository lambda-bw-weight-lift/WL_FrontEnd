import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PrimaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";

// Context
import {WorkoutContext} from "../contexts/WorkoutContext";


export default function CurrentWorkout () {

    // const { workoutsArray } = useContext(WorkoutContext); If this component serves same function as previousWorkout, we'll need this

    return(
        <div>
            <h3>{Today()} - {Weekday()}</h3>
            <Link to="/add-exercise">
                <PrimaryBtn>Add Exercise</PrimaryBtn>
            </Link>
        </div>
        // <CurrentWorkoutCard key={workout.id} {...workoutsArray} workout={workout} /> And also this.
    );  
}