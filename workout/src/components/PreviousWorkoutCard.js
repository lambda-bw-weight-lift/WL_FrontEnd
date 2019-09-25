import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
// Unique token to verify user should have access to info
import axiosWithAuth from "../utils/axiosWithAuth";
import {PrimaryBtn} from "./Buttons"
import { aerobic, arms, core, legs, stretches, upperBody} from "../media/SvgIcons"


function PreviousWorkoutCard (props) {

    const svgArray=[aerobic, arms, core, legs, stretches, upperBody];
    // CONST WORKOUT IS DUMMY DATA (^_^)
    const workout = [
        {
        date: "9/22/19 - Monday",    
        exercise: "squats",
        exerciseRegion: "legs",
        restPeriod: "1 min",
        sets: "5x5",
        weight: "200 lbs"}

    ];
    return(
        <div>
            <header>
                <h3>
                    {workout.date}
                </h3> 
            </header>
            // WORKOUT.MAP NEEDS TO BE CHANGED TO APPROPRIATE PROPS BEING PASSED DOWN
            {workout.map(eachExerciseInWorkout => {  
                if (eachExerciseInWorkout.exerciseRegion === "aerobic"){
                    return(
                        <section>
                            <div>
                                {svgArray[0]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }
                else if (eachExerciseInWorkout.exerciseRegion === "arms"){
                    return(
                        <section>
                            <div>
                                {svgArray[1]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "core"){
                    return(
                        <section>
                            <div>
                                {svgArray[2]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "legs"){
                    return(
                        <section>
                            <div>
                                {svgArray[3]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "stretches"){
                    return(
                        <section>
                            <div>
                                {svgArray[4]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "upperBody"){
                    return(
                        <section>
                            <div>
                                {svgArray[5]}   
                            </div>
                            <div>
                                {eachExerciseInWorkout.exercise}
                            </div>
                        </section>
                    )
                }
            })
        }
        // WHAT PATH ARE WE LINKING TO HERE???????!?!?!?!?!?!?!?!?!?
            <Link to="/">
                <PrimaryBtn> View </PrimaryBtn>
            </Link> 
        </div>
    );
}

export default PreviousWorkoutCard