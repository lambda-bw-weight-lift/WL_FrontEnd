import React from "react";
import styled from "styled-components";
import {PrimaryBtn} from "./Buttons";
import {Today} from "./TodayAndID";


export default function CurrentWorkout () {

    return(
        <div>
            <h3>{Today}</h3>
           <PrimaryBtn>Add Exercise</PrimaryBtn>
        </div>
    );
}