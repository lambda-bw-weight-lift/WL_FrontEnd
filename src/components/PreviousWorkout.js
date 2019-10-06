import React from "react";
// import styled from "styled-components";
import PreviousWorkoutCard from "./PreviousWorkoutCard";
import axiosWithAuth from "../utils/axiosWithAuth";

// Context
// import {WorkoutContext} from '../contexts/WorkoutContext';


export default function PreviousWorkout(props) {
    const allWorkouts = props.workoutsArray
    console.log("allWorkouts", allWorkouts)
    // const allWorkouts = []
    const seeThisWorkout = (e, clickedWorkoutId) => {

        axiosWithAuth()
            .get(`https://lifting-weights-java.herokuapp.com/workouts/${clickedWorkoutId}`)
            .then(res => {
                console.log("clickedWorkoutID axios response", res, res.data)
                props.setEntireWorkout(res.data, clickedWorkoutId)
                props.history.push("/history/detailed")
            })
            .catch(err => console.log('clickedWorkoutID axios failed b/c ', err.response))


    }
    return (
        <div className="workout-list">

            {allWorkouts.map(workout => {
                return (
                    <div key={workout.workoutid} onClick={(e) => { seeThisWorkout(e, workout.workoutid) }}>
                        <header>
                            <h3>
                                {workout.workoutname}
                            </h3>
                        </header>
                        <PreviousWorkoutCard workout={workout} />
                    </div>

                )
            }
            )}

        </div>
    );
}