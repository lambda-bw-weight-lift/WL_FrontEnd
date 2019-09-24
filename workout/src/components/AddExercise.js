import React from "react";
import styled from "styled-components";
import {withFormik, Form, Field,} from "formik"
import * as Yup from "yup";

function AddExercise () {
    
    return(
        <Form autoComplete="on">
            {SwitchLabels()}
            <label htmlFor="exercise">Enter Exercise Name:</label>
            <Field id="exercise" type="text" name="exercise" placeholder="Squats"/>
            <label htmlFor="weight">Enter Exercise Weight:</label>
            <Field id="weight" type="number" name="weight" placeholder="Amount in lbs/kg"/>
            <label htmlFor="reps">Enter Number of Sets</label>
            <Field id="reps" type="number" name="sets" placeholder="Sets"/>
            <label htmlFor="reps">Enter Number of Reps</label>
            <Field id="reps" type="number" name="reps" placeholder="Reps"/>
            <label htmlFor="restPeriod">Enter Rest Time</label>
            <Field id="restPeriod" type="number" name="restPeriod" placeholder="Rest time"/>
            <label htmlFor="exercise-region">Target Muscle Group:</label>
            <Field id="exercise-region" type="text" name="exercise" placeholder="Example: Legs/Arms/Triceps"/>
        </Form>
    );
}
const FormikAddExercise= withFormik({
    validationSchema: Yup.object().shape({
        exercise: yup.string().required("Exercise name required."),
        weight: yup.number().required("Enter 0 if body-weight exercise."),
        sets: yup.number().required("Number of sets required"),
        reps: yup.number().required("Number of reps required"),
        restPeriod: yup.number().required("If no rest enter 0")
    })
})(AddExercise);
