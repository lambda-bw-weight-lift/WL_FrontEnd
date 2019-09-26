import React from "react";
import styled from "styled-components"


const PrimaryBtn= styled.button`
    background-color: #0069eb
    font-size: 2rem;
    color: white;
    border-radius: 4px;
    
`;

const SecondaryBtn= styled.button`
    border: 1px solid #0069eb;
    color:#0069eb;
    font-size: 2rem;
    border-radius: 4px;
`;

const DeleteBtn= styled.button`
background-color: red;
font-size: 2rem;
color: white;
border-radius: 4px;
`;


export {PrimaryBtn, SecondaryBtn, DeleteBtn}