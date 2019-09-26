import React,  {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {PrimaryBtn, SecondaryBtn} from "./Buttons.js"
import axiosWithAuth from "../utils/axiosWithAuth.js";


//STYLES GO HERE
// const GetStarted = styled.div

export default function GetStarted (props) {
    
    return(
        <main>
            {/* created link tags for login and signup */}
            {/* <div>
                <Link to='/signup'><MyH2>SignUp</MyH2></Link>
                <Link to='/login'><MyH2>Login</MyH2></Link>
            </div> */}
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