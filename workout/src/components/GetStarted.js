import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {PrimaryBtn, SecondaryBtn} from "./Buttons.js"
// const GetStarted = styled.div

export default function GetStarted () {
    
    return(
        <main>
            <h1 className="header">Ready to Crush It?</h1>
           <Link to="/today" >
            <PrimaryBtn>Create Workout</PrimaryBtn>
           </Link>
            <h3>  OR  </h3>
            <Link to="/history">
                <SecondaryBtn>Review Past Workouts</SecondaryBtn>
            </Link>
        </main>
        
    );
}