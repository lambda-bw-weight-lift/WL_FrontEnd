import React,  {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {PrimaryBtn, SecondaryBtn} from "./Buttons.js"
import axiosWithAuth from "../utils/axiosWithAuth.js";
import {Today, Weekday} from "./TodayAndID"

//STYLES GO HERE
// const GetStarted = styled.div

export default function GetStarted (props) {
    
    return(
        <main>
            <h1 className="header">Ready to Crush It?</h1>
           <Link to="/today" >
            <PrimaryBtn onClick={props.newWorkoutTrigger}>Create Workout</PrimaryBtn>
           </Link>
            <h3>  OR  </h3>
            <Link to="/history">
                <SecondaryBtn>Review Past Workouts</SecondaryBtn>
            </Link>
        </main>
        
    );
}