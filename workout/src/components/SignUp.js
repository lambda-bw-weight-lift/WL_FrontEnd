import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';



const Div = styled.div`
display: flex;
    justify-content: center;
    margin: 30px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    padding: 7px;
    margin-bottom: 7px;
   `;

const StyledButton = styled.button`
    background: #276fd6;
    border-radius: 5px;
    border: 2px solid #276fd6;
    color: white;
    padding: 0.25em 1em;
    height: 30px;
    width: 100%;
  `;

const MyField = styled.input`
  height:30px;
  border: 2px solid black;
  border-radius:5px;
  padding: 5px;
  `;

const Label = styled.label`
text-align: left;
  margin-bottom: 5px;
  padding: 5px;
`;


const newSignUp = {
    email: '',
    password: '',
};


function SignUp(props) {

    const [newLogin, setNewLogin] = useState([])

    const onSubmit = (values) => {
        console.log(values)

        axios.post('https://weight-lifting-journal-bw.herokuapp.com/auth/register', values)
            .then((response) => {
                setNewLogin([...newLogin, response.date])
            })
    }


    const ValidationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Username is Required'),
        password: Yup.string()
            .min(8, "Password must be 8 characters or longer")
            .required("Password is required"),
    });

    return (
        <div>
            <h1>SignUp</h1>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={newSignUp}
                onSubmit={onSubmit}
                render={props => {
                    return (
                        <Form>
                            <Div>
                                <Label>
                                    Username
                                </Label>
                                <MyField name='username' type='username' placeholder='Username' />
                                <ErrorMessage name='username' component='div' />

                            </Div>


                            <Div>
                                <Label>
                                    Password
                                </Label>
                                <MyField name='password' type='password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />

                            </Div>

                            <Div>
                                <StyledButton type='submit'>Submit</StyledButton>
                            </Div>
                        </Form>
                    )
                }}
            />
        </div>
    )
}

export default SignUp