import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PrimaryBtn, SecondaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";
import CurrentWorkoutCard from "./CurrentWorkoutCard";

// Context
import {WorkoutContext} from "../contexts/WorkoutContext";
import axiosWithAuth from "../utils/axiosWithAuth";


export default function CurrentWorkout (props) {

    const [workout, setWorkout] = useState([]);

    // const getWorkout = () => {
    //     axiosWithAuth()
    //         .get(`/workouts/${workoutid}`)
    //         .then(res => {
    //             setWorkout(res.data);
    //         })
    //         .catch(err => console.log('Get request current workout failed b/c ', err.response))
    // }

    // useEffect(() => {
    //     getWorkout();
    // }, [])
    
    // const { workoutsArray } = useContext(WorkoutContext); 

   const exerciseCards= workout.map(exercise => 
        <CurrentWorkoutCard exercise={exercise}/>
    )
    // const handleChange = () => {
    //     axiosWithAuth()
    //     .post("/workouts/current", workout)
    //     .then(results => {
    //         console.log(results)
    //     })
    //     .catch(error =>{
    //         console.log("error, did not post workout submission correctly", error)
    //     })
    //     setWorkout([]);
    // }
    return(
        <div>
            <h3>{Today()} - {Weekday()}</h3>
            {exerciseCards}
            <Link to="/add-exercise">
                <SecondaryBtn>Add Exercise</SecondaryBtn>
            </Link>
            <Link to="/history">
                <PrimaryBtn onClick={handleChange}>Submit Workout</PrimaryBtn>
            </Link>
        {/* <CurrentWorkoutCard key={workout.id} {...workoutsArray} workout={workout} />  */}
        </div>
    );  
}