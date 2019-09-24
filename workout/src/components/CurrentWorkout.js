import React from "react";
import styled from "styled-components";
import {PrimaryBtn} from "./Buttons";
import {Today, Weekday} from "./TodayAndID";


export default function CurrentWorkout () {

    return(
        <div>
            <h3>{Today()} - {Weekday()}</h3>
           <PrimaryBtn>Add Exercise</PrimaryBtn>
        </div>
    );
}