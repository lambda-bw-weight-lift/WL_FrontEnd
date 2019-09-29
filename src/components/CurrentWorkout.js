import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {PrimaryBtn, SecondaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

// Context
import axiosWithAuth from "../utils/axiosWithAuth";


export default function CurrentWorkout (props) {
    const [workout, setWorkout] = useState([]);
    // const workoutid = workout.workoutid;
    const workoutid = props.workout.workoutid;

    useEffect(() => {
        if (workoutid) {
            axiosWithAuth()
                .get(`https://lifting-weights-java.herokuapp.com/workouts/${workoutid}`)
                .then(res => {
                    console.log('Get request successful in CurrentWorkout component', res.data)
                    console.log("workoutid at the bottom", workoutid)
                    setWorkout(res.data);
                })
                .catch(err => console.log('Get request in CurrentWorkout failed b/c ', err.response))
        }
    }, [])
 
    return(
        <Link to="/add-exercise">
            <section>
                <h3>{Today()} - {Weekday()}</h3>
                <Link to="/edit-exercise">
                    {workout.map(exercise => <CurrentWorkoutCard key={exercise.exerciseid} exercise={exercise}/>)}
                </Link>
                <Link to="/add-exercise">
                    <SecondaryBtn>Add Exercise</SecondaryBtn>
                </Link>
                <Link to="/history">
                    <PrimaryBtn>Submit Workout</PrimaryBtn>
                </Link>
            </section>
        </Link>
    );  
}