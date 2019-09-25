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
    height: 2.5rem;
    width: 100%; 
  `;

const Section = styled.section`
  width: 400px;
  margin: auto;
    padding-top: 15px;
  `;

const inputStyles = {
    height: '30px',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '5px'
}

const errorStyles = {
    color: '#c02525',
    fontSize: '.8rem',
    textAlign: 'left',
    marginTop: '10px',
}

const Label = styled.label`
text-align: left;
  margin-bottom: 5px;
  padding: 5px;
`;

const MyH1 = styled.h1`
    width: 400px;
    margin: auto;
    text-align: initial;
    padding-bottom: 25px;
`;


const newSignUp = {
    email: '',
    password: '',
};


function SignUp(props) {

    const [newLogin, setNewLogin] = useState([])

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const onSubmit = (values) => {

        setLoading(true);
        setError('');
        values.username = values.email

        axios.post('https://lifting-weights-java.herokuapp.com/users/register', values)
            .then((response) => {
                console.log(response)
                setLoading(false)
                setNewLogin([...newLogin, response.date])
            })
            .catch((error) => {
                // console.log(error.response)
                setLoading(false)
                setError(error.response.data.detail)
            })
    }


    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be 8 characters or longer")
            .required("Password is required"),
    });

    return (
        <div>
            <MyH1>SignUp</MyH1>

            {error && <div className='server-error'>{error}</div>}
            
            <Formik
                validationSchema={ValidationSchema}
                initialValues={newSignUp}
                onSubmit={onSubmit}
                render={props => {
                    return (
                        <Form>
                            <Div>
                                <Label>
                                    Enter Email*
                                </Label>
                                <Field name='email' type='text' placeholder='Enter Your Email Address' style={inputStyles} />
                                <ErrorMessage name='email' component='div' style={errorStyles} />

                            </Div>


                            <Div>
                                <Label>
                                    Create Password*
                                </Label>
                                <Field name='password' type='password' placeholder='Create a Password' style={inputStyles} />
                                <ErrorMessage name='password' component='div' style={errorStyles} />

                            </Div>

                            <Section>
                                <StyledButton type='submit'>{loading?"Submitting":"Sign Up"}</StyledButton>
                            </Section>
                        </Form>
                    )
                }}
            />
        </div>
    )
}

export default SignUp