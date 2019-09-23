import React from "react";
import styled from "styled-components";

import {PrimaryBtn, SecondaryBtn} from "./Buttons.js"
// const GetStarted = styled.div

export default function GetStarted () {
    
    return(
        <main>
            <h1 className="header">Ready to Crush It?</h1>
            <PrimaryBtn>Create Workout</PrimaryBtn>
            <h3>  OR  </h3>
            <SecondaryBtn>Review Past Workouts</SecondaryBtn>
        </main>
        
    );
}