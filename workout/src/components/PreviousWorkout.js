import React, {useContext} from "react";
import styled from "styled-components";
import PreviousWorkoutCard from "./PreviousWorkoutCard";

// Context
import {WorkoutContext} from '../contexts/WorkoutContext';

export default function PreviousWorkout () {

    const { workoutsArray } = useContext(WorkoutContext);
    
    return(
        <div className="workout-list">
            {workoutsArray.map(workout => (
                <PreviousWorkoutCard key={workout.id} {...workoutsArray} workout={workout} />
            ))}
        </div>
    );
}