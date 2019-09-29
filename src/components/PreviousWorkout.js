import React from "react";
// import styled from "styled-components";
import PreviousWorkoutCard from "./PreviousWorkoutCard";

// Context
// import {WorkoutContext} from '../contexts/WorkoutContext';


export default function PreviousWorkout(props) {
    const allWorkouts = props.workoutsArray
    console.log("allWorkouts", allWorkouts)
    // const allWorkouts = []
    return (
        <div className="workout-list">

            {allWorkouts.map(workout => {
                return (
                    <div key={workout.workoutid}>
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