import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import { history } from '../App'




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
    height: 40px;
    width: 100%;
  `;

const Section = styled.section`
    width: 400px;
    margin: auto;
    padding-top: 15px;
`;

const Label = styled.label`
    text-align: left;
    margin-bottom: 5px;
    padding: 5px;
    `;

const errorStyles = {
    color: '#c02525',
    fontSize: '.8rem',
    textAlign: 'left',
    marginTop: '10px',
}

const inputStyles = {
    height: '30px',
    border: '2px solid #1e90ff',
    borderRadius: '5px',
    padding: '5px'
}

const MainContainer = styled.div`
    background: #fffefe;
    width: 500px;
    margin: auto;
    box-shadow: 0px 1px 3px 0px #aaa;
    height: 425px;
    padding-top: 30px;
    margin-top: 45px;
`;

const MyH1 = styled.h1`
    width: 400px;
    margin: auto;
    text-align: initial;
    padding-bottom: 25px;
`;

const login = {
    email: '',
    password: '',
};



function Login(props) {

    const [loading, setLoading] = useState(false)

    const onSubmit = (values) => {
        console.log(values)
        setLoading(true)

        const bodyData = new FormData();
        bodyData.set('username', values.username);
        bodyData.set('password', values.password);
        bodyData.set('grant_type', 'password');

        axios({
            method: 'POST',
            url: 'https://lifting-weights-java.herokuapp.com/login',
            data: bodyData,

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa("pl,mkoijn:pl,mkoijn")}`
            }
        })
            .then((response) => {
                setLoading(false)
                localStorage.setItem('token', response.data.access_token);
                console.log("Response in Login axios POST call", response);
                props.setUser({"username": values.username});
                history.push('/');
            })
            .catch((error) => {
                // console.log(error.response)
                setLoading(false)
            })
    }


    const ValidationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(8, "Password must be 8 characters or longer").required("Password is required")
    });


    return (
        <MainContainer>
            <MyH1>Login</MyH1>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={login}
                onSubmit={onSubmit}
                render={props => {
                    return (

                        <Form>
                            <Div>
                                <Label>
                                    Username
                                    </Label>
                                <Field name='username' type='text' placeholder='Enter Username' style={inputStyles} />
                                <ErrorMessage name='username' component='div' style={errorStyles} />

                            </Div>

                            <Div>
                                <Label>
                                    Password
                                </Label>

                                <Field name='password' type='password' placeholder='Enter Password' style={inputStyles} />
                                <ErrorMessage name='password' component='div' style={errorStyles} />

                            </Div>

                            <Section>
                                <StyledButton type='submit'>{loading ? "Submitting" : "Login"}</StyledButton>
                            </Section>
                        </Form>
                    )
                }}
            />
        </MainContainer>
    )
}

export default Login