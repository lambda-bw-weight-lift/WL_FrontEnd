import React from "react";

import styled from "styled-components";
// Unique token to verify user should have access to info
import { PrimaryBtn } from "./Buttons"
import { aerobic, arms, core, legs, stretches, upperBody } from "../media/SvgIcons"

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

function PreviousWorkoutCard(props) {
    console.log("props.workout inside of PreviousWorkoutCard", props.workout)
    const svgArray = [aerobic, arms, core, legs, stretches, upperBody];

    return (
        <div>
            {props.workout.exercises.map((eachExerciseInWorkout) => {
                if (eachExerciseInWorkout.exerciseregion === "aerobic") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[0]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                }
                else if (eachExerciseInWorkout.exerciseregion === "arms") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[1]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                } else if (eachExerciseInWorkout.exerciseregion === "core") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[2]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                } else if (eachExerciseInWorkout.exerciseregion === "legs") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[3]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                } else if (eachExerciseInWorkout.exerciseregion === "stretches") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[4]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                } else if (eachExerciseInWorkout.exerciseregion === "upperBody") {
                    return (
                        <StyledSection key={eachExerciseInWorkout.exerciseid}>
                            <div className="svg">
                                {svgArray[5]}
                            </div>
                            <div className="data">
                                <h4>{eachExerciseInWorkout.exercisename}</h4>
                                <p>{eachExerciseInWorkout.reps}</p>
                            </div>
                        </StyledSection>
                    )
                }
            })


            }
            {/* <Link to="/">
                <PrimaryBtn> View </PrimaryBtn>
            </Link>  */}

        </div>


    )
}

export default PreviousWorkoutCard
