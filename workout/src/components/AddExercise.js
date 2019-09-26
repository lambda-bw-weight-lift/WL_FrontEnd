import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import {withFormik, Form, Field, ErrorMessage,} from "formik"
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import '../index.css';


function AddExercise ({values, errors, touched, status}) {
   
   
    return(
        <>   
           <Form className="form" autoComplete="on">
                <label htmlFor="exercise">Enter Exercise Name:</label>
                <Field className="form field" id="exercise" type="text" name="exercise" placeholder="Squats"/>
                <label htmlFor="weight">Enter Exercise Weight:</label>
                <Field className="form field" id="weight" type="text" name="weight" placeholder="Enter amount in lbs/kg"/>
                <label htmlFor="sets">Enter Sets X Reps</label>
                <Field className="form field" id="sets" type="text" name="sets" placeholder="Sets X Reps"/>
                <label htmlFor="restPeriod">Enter Rest Time</label>
                <Field className="form field" id="restPeriod" type="text" name="restPeriod" placeholder="Enter rest time"/>
                
                {/* <label htmlFor="exerciseRegion">Target Muscle Group:</label>
                <Field className="form field" id="exerciseRegion" type="text" name="exerciseRegion" placeholder="Ex: Legs/Arms/Triceps"/> */}
                <label>
                    Select Target Muscle Group:
                    <Field component="select" name="exerciseRegion">
                        <option value="default">Pick A Group</option>
                        <option value="aerobic">Aerobic</option>
                        <option value="arms">Arms</option>
                        <option value="core">Core</option>
                        <option value="legs">Legs</option>
                        <option value="stretches">Stretches</option>
                        <option value="upperBody">Upper Body</option>
                    </Field>
                </label>
                <Link to="/today">
                    <button className="form button" type="submit">Submit Exercise</button>
                </Link>
               
            </Form>
            <div>
                {touched.exercise && errors.exercise &&(<p className="error">{errors.exercise}</p>)}
                {touched.weight && errors.weight &&(<p className="error">{errors.weight}</p>)}
                {touched.sets && errors.sets &&(<p className="error">{errors.sets}</p>)}
                {touched.restPeriod && errors.restPeriod &&(<p className="error">{errors.restPeriod}</p>)}
                {touched.exerciseRegion && errors.exerciseRegion &&(<p className="error">{errors.exerciseRegion}</p>)}
            </div>
        </>
    );
}
const FormikAddExercise= withFormik({
    validationSchema: Yup.object().shape({
        exercise: Yup.string().required("Exercise name required."),
        weight: Yup.string().required("Enter 0 if body-weight exercise."),
        sets: Yup.string().required("Number of sets/reps required"),
        restPeriod: Yup.string().required("If no rest enter 0")
    }),
    mapPropsToValues({ exercise, weight, sets, restPeriod, exerciseRegion }) {
        return{
            exercise: exercise || "",
            weight: weight || "",
            sets: sets ||"",
            restPeriod: restPeriod|| "",
            exerciseRegion: exerciseRegion||""
        };
    },
    handleSubmit(values) {
        axiosWithAuth()
            .post(`/workouts/${workoutid}`, values)
        .then(results => {
            console.log("result of post within handleSubmit in AddExercise.js",results)
        })
        .catch(error =>{
            console.log("error, did not post data correctly", error)
        })
        console.log("looking for values",values)  
    }
})(AddExercise);

console.log("This is the Data", FormikAddExercise)

export default FormikAddExercise