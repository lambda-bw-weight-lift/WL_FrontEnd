import React from "react";
import styled from "styled-components";

const StyledDiv=styled.div`
    width:80%;
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color: beige;
    border: 1px solid #0009;
    border-radius:30px;
    header{
        width:100%;
        height100px;
    }
    body{
        width:100%;
        height:auto;
        display:flex;
        justify-content: space-evenly;
        flex-wrap:wrap;
    }
`;

export default function CurrentWorkoutCard (props) {
    
    return(
        <StyledDiv>
            <header className="card-header">
                <h3>{props.exercise.exercise}</h3>
            </header>
            <body>
                <p>{props.exercise.sets}</p>
                <p>{props.exercise.exerciseRegion}</p>
                <p>{props.exercise.restPeriod}</p>
                <p>{props.exercise.weight}</p>
            </body>
        </StyledDiv>
    );
}