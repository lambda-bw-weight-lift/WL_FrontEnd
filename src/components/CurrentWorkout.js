import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn, SecondaryBtn } from "./Buttons";
import { Today, Weekday } from "./TodayAndID";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

// Context
import axiosWithAuth from "../utils/axiosWithAuth";


export default function CurrentWorkout(props) {
    const [workoutContainer, setWorkoutContainer] = useState([]);
    const workoutid = props.workout.workoutid;

    useEffect(() => {
        if (workoutid) {
            axiosWithAuth()
                .get(`https://lifting-weights-java.herokuapp.com/workouts/${workoutid}`)
                .then(res => {
                    console.log('Get request successful in CurrentWorkout component', res.data)
                    console.log("workoutid created when clicking Add Workout Button", workoutid)
                    setWorkoutContainer(res.data);
                })
                .catch(err => console.log('Get request in CurrentWorkout failed b/c ', err.response))
        }
    }, [])

    const eventHandler = (event, key) => {
        props.setExerciseid(key)
        props.history.push("/edit-exercise")
    }
    return (
        <section>
            <h3>{Today()} - {Weekday()}</h3>

            {workoutContainer.map(exercise => {
                return (
                    <div onClick={(e) => eventHandler(e, exercise.exerciseid)}>
                        <CurrentWorkoutCard key={exercise.exerciseid} exercise={exercise} />
                    </div>
                )
            })}

            < Link to="/add-exercise">
                <SecondaryBtn>Add Exercise</SecondaryBtn>
            </Link>
            <Link to="/history">
                <PrimaryBtn>Submit Workout</PrimaryBtn>
            </Link>
        </section >
    );
}