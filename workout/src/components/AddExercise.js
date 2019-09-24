import React from "react";
import styled from "styled-components";
import {withFormik, Form, Field, ErrorMessage,} from "formik"
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

function AddExercise (values, errors, touched, status) {
    
    return(
        <>   
           <Form autoComplete="on">
                <label htmlFor="exercise">Enter Exercise Name:</label>
                <Field id="exercise" type="text" name="exercise" placeholder="Squats"/>
                <label htmlFor="weight">Enter Exercise Weight:</label>
                <Field id="weight" type="number" name="weight" placeholder="Amount in lbs/kg"/>
                <label htmlFor="sets">Enter Sets X Reps</label>
                <Field id="sets" type="text" name="sets" placeholder="Sets X Reps"/>
                <label htmlFor="restPeriod">Enter Rest Time</label>
                <Field id="restPeriod" type="number" name="restPeriod" placeholder="Rest time in seconds"/>
                <label htmlFor="exerciseRegion">Target Muscle Group:</label>
                <Field id="exerciseRegion" type="text" name="exerciseRegion" placeholder="Example: Legs/Arms/Triceps"/>
            </Form>
            <div>
                {touched.exercise && ErrorMessage.exercise &&(<p className="error">{errors.exercise}</p>)}
                {touched.weight && ErrorMessage.weight &&(<p className="error">{errors.weight}</p>)}
                {touched.sets && ErrorMessage.sets &&(<p className="error">{errors.sets}</p>)}
                {touched.restPeriod && ErrorMessage.restPeriod &&(<p className="error">{errors.restPeriod}</p>)}
                {touched.exerciseRegion && ErrorMessage.exerciseRegion &&(<p className="error">{errors.exerciseRegion}</p>)}
            </div>
        </>
    );
}
const FormikAddExercise= withFormik({
    validationSchema: Yup.object().shape({
        exercise: Yup.string().required("Exercise name required."),
        weight: Yup.number().required("Enter 0 if body-weight exercise."),
        sets: Yup.string().required("Number of sets/reps required"),
        restPeriod: Yup.number().required("If no rest enter 0")
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
    handleSubmit(values, {setStatus}) {
        axiosWithAuth()
        .post("https://reqres.in/api/users/", values)
        .then(results => {
            console.log(results)
            setStatus(results.data);
        })
        .catch(error =>{
            console.log("error, did not post data correctly", error)
        })
        console.log("looking for values",values)
    }
})(AddExercise);

console.log("This is the Data", FormikAddExercise)

export default FormikAddExercise