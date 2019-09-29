import React from "react";
// import styled from "styled-components";
import { withFormik, Form, Field} from "formik"
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import '../index.css';


function AddExercise({values, errors, touched, status }) {
    

    return (
        <>
            <Form className="form" autoComplete="on">
                <label htmlFor="exercisename">Enter Exercise Name:</label>
                <Field className="form field" id="exercisename" type="text" name="exercisename" placeholder="Squats" />
                <label htmlFor="weightlifted">Enter Exercise Weight:</label>
                <Field className="form field" id="weightlifted" type="text" name="weightlifted" placeholder="Enter amount in lbs/kg" />
                <label htmlFor="reps">Enter Sets X Reps</label>
                <Field className="form field" id="reps" type="text" name="reps" placeholder="Sets X Reps" />
                <label htmlFor="restperiod">Enter Rest Time</label>
                <Field className="form field" id="restperiod" type="text" name="restperiod" placeholder="Enter rest time" />

                {/* <label htmlFor="exerciseRegion">Target Muscle Group:</label>
                <Field className="form field" id="exerciseRegion" type="text" name="exerciseRegion" placeholder="Ex: Legs/Arms/Triceps"/> */}
                <label>
                    Select Target Muscle Group:
                    <Field component="select" name="exerciseregion">
                        <option value="default">Pick A Group</option>
                        <option value="aerobic">Aerobic</option>
                        <option value="arms">Arms</option>
                        <option value="core">Core</option>
                        <option value="legs">Legs</option>
                        <option value="stretches">Stretches</option>
                        <option value="upperBody">Upper Body</option>
                    </Field>
                </label>
                {/* <Link to="/today"> */}
                    <button className="form button" type="submit">Submit Exercise</button>
                {/* </Link> */}

            </Form>
            <div>
                {touched.exercisename && errors.exercisename && (<p className="error">{errors.exercisename}</p>)}
                {touched.weightlifted && errors.weightlifted && (<p className="error">{errors.weightlifted}</p>)}
                {touched.reps && errors.reps && (<p className="error">{errors.reps}</p>)}
                {touched.restperiod && errors.restperiod && (<p className="error">{errors.restperiod}</p>)}
                {touched.exerciseregion && errors.exerciseregion && (<p className="error">{errors.exerciseregion}</p>)}
            </div>
        </>
    );
}

const FormikAddExercise = withFormik({
    validationSchema: Yup.object().shape({
        exercisename: Yup.string().required("Exercise name required."),
        weightlifted: Yup.string().required("Enter 0 if body-weight exercise."),
        reps: Yup.string().required("Number of sets/reps required"),
        restperiod: Yup.string().required("If no rest enter 0")
    }),
    mapPropsToValues({ exercisename, weightlifted, reps, restperiod, exerciseregion, workoutid }) {
        return {
            exercisename: exercisename || "",
            weightlifted: weightlifted || "",
            reps: reps || "",
            restperiod: restperiod || "",
            exerciseregion: exerciseregion || "",
            workoutid: workoutid || ""
        };
    },
    handleSubmit(values, { setStatus, props, resetForm }) {
        console.log(values);
        console.log("props inside handle submit",props);
        // const bodyData = new FormData();
        // bodyData.set("exercisename", values.exercisename);
        // bodyData.set("weightlifted", values.weightlifted);
        // bodyData.set("reps", values.reps);
        // bodyData.set("restperiod", values.restperiod);
        // bodyData.set("exerciseregion", values.exerciseregion);
        // bodyData.set("grant_type", "password");
        axiosWithAuth()
            // .post(`https://lifting-weights-java.herokuapp.com/workouts/${values.workoutid}`, bodyData, {
            //     headers: {
            //         Authorization: `Basic ${btoa("pl,mkoijn:pl,mkoijn")}`,
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     }
            // .post(`https://lifting-weights-java.herokuapp.com/workouts/${values.workoutid}`, bodyData)
            .post(`https://lifting-weights-java.herokuapp.com/workouts/${values.workoutid}`, values)
            .then(results => {
                console.log("result of post within handleSubmit in AddExercise.js", results)
                // setStatus(results.data);
                resetForm();
                props.history.push("/today")
                props.setExerciseid(results)
            })
            .catch(error => {
                console.log("error, did not post data correctly", error.response)
            })
        console.log("looking for values", values)

    }
})(AddExercise);

console.log("This is the Data", FormikAddExercise)

export default FormikAddExercise;