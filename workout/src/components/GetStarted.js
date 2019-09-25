import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PrimaryBtn, SecondaryBtn } from "./Buttons.js"

const MyH2 = styled.h2`
text-align:center;
`;

export default function GetStarted() {

    return (

        <main>
            {/* created link tags for login and signup */}
            {/* <div>
                <Link to='/signup'><MyH2>SignUp</MyH2></Link>
                <Link to='/login'><MyH2>Login</MyH2></Link>
            </div> */}
            <h1 className="header">Ready to Crush It?</h1>
            <Link to="/today" >
                <PrimaryBtn>Create Workout</PrimaryBtn>
            </Link>
            <h3>  OR  </h3>
            <SecondaryBtn>Review Past Workouts</SecondaryBtn>
        </main>

    );
}