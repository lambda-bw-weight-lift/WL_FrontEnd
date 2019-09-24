import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PrimaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";



export default function CurrentWorkout () {

    return(
        <div>
            <h3>{Today()} - {Weekday()}</h3>
            <Link to="/add-exercise">
                <PrimaryBtn>Add Exercise</PrimaryBtn>
            </Link>
        </div>
    );  
}