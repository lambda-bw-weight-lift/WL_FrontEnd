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
    const workoutid = props.workout.workoutid;

    useEffect(() => {
        if (workoutid) {
            axiosWithAuth()
                .get(`https://lifting-weights-java.herokuapp.com/workouts/${workoutid}`)
                .then(res => {
                    // console.log('Get request successful in CurrentWorkout component', res.data)
                    // console.log("workoutid at the bottom", workoutid)
                    // setWorkout(res.data);
                })
                .catch(err => console.log('Get request in CurrentWorkout failed b/c ', err.response))
        }
    }, [])
    
    // const { workoutsArray } = useContext(WorkoutContext); 

   const exerciseCards= workout.map(exercise => 
        <CurrentWorkoutCard exercise={exercise}/>
    )
    //DELETE THIS CODE AS A PART OF CLEANUP LATER. SAVING FOR NOW JUST IN CASE
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
                <PrimaryBtn>Submit Workout</PrimaryBtn>
            </Link>
        {/* <CurrentWorkoutCard key={workout.id} {...workoutsArray} workout={workout} />  */}
        </div>
    );  
}