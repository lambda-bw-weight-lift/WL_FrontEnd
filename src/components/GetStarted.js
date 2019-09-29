import React from "react";
import { Link } from "react-router-dom";

import {PrimaryBtn, SecondaryBtn} from "./Buttons.js"


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