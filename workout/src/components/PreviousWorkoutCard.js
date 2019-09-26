import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
// Unique token to verify user should have access to info
import axiosWithAuth from "../utils/axiosWithAuth";
import {PrimaryBtn} from "./Buttons"
import { aerobic, arms, core, legs, stretches, upperBody} from "../media/SvgIcons"

const StyledSection = styled.section`
    box-sizing:border-box;
    width: 264px;
    height:auto
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    background-color:aliceblue;
    padding: 16px 16px 16px 16px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.03), 0 6px 10px 2px rgba(0,0,0,0.08);

    .svg{
        width:32px;
        height:32px;
     
    }
    .data{
        display:flex;
        flex-direction:column;
        align-items: start;
        padding: 0 0 0 16px;
        border-radius:4px;
        width:200px
        p{
            margin: 5px 0;
        }
        h4{ 
           margin:1px 0 0 0; 
        }
    }
`;

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
            weight: "200 lbs"
        },
        {
            exercise: "bench press",
            exerciseRegion: "upperBody",
            restPeriod: "45 seconds",
            sets: "4x8",
            weight: "155 lbs",
        },
        {
            exercise: "bent-over row",
            exerciseRegion: "upperBody",
            restPeriod: "30 seconds",
            sets: "3x12",
            weight: "135 lbs",
        }

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
                        <StyledSection>
                            <div className="svg">
                                {svgArray[0]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
                    )
                }
                else if (eachExerciseInWorkout.exerciseRegion === "arms"){
                    return(
                        <StyledSection>
                            <div className="svg">
                                {svgArray[1]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "core"){
                    return(
                        <StyledSection>
                            <div className="svg">
                                {svgArray[2]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "legs"){
                    return(
                        <StyledSection>
                            <div className="svg">
                                {svgArray[3]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "stretches"){
                    return(
                        <StyledSection>
                            <div className="svg">
                                {svgArray[4]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
                    )
                }else if (eachExerciseInWorkout.exerciseRegion === "upperBody"){
                    return(
                        <StyledSection>
                            <div className="svg">
                                {svgArray[5]}   
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercise}</h4>
                                <p>{eachExerciseInWorkout.sets}</p>
                            </div>
                        </StyledSection>
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