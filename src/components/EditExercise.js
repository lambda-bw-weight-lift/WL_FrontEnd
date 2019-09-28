import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage, } from "formik"
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import '../index.css';

const newBlankExercise = {
    exercisename: "",
    weightlifted: "",
    reps: "",
    restperiod: "",
    exerciseregion: ""
}


function EditExercise(props) {

    const [editExercise, setEditExercise] = useState(newBlankExercise);

    // axiosWithAuth()
    // .get(`https://lifting-weights-java.herokuapp.com/exercise/${props.exerciseid}`)
    // .then(results => {
    //     // console.log("result of post within handleSubmit in EditExercise.js", results)
    //     // props.history.push("/today")
    //     form=(results);
    // })
    // .catch(error => {
    //     console.log("error, did not post data correctly inside handlesubmit in EditExercise.js", error.response)
    // })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit inside edit exercise is called");
        // console.log("value of props.exerciseid in edit exercise handlesubmit", props.exerciseid )
        // console.log("value of props.exerciseid.exerciseid in edit exercise handlesubmit", props.exerciseid.exerciseid)
        axiosWithAuth()
            .put(`https://lifting-weights-java.herokuapp.com/exercise/${props.exerciseid.data.exerciseid}`, editExercise)
            .then(results => {
                console.log("result of post within handleSubmit in EditExercise.js", results)
                props.history.push("/today")
                setEditExercise(newBlankExercise);
            })
            .catch(error => {
                console.log("error, did not post data correctly inside handlesubmit in EditExercise.js", error.response)
            })
    }

    const handleChange = event => {
        console.log("handle change inside edit exercise is called");
        setEditExercise({...editExercise, [event.target.name]: event.target.value})
        console.log('handle change in edit exercise w/ new values', editExercise)
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit} autoComplete="on">
                <label htmlFor="exercisename">Enter Exercise Name:</label>
                <input className="form-field" id="exercisename" type="text" name="exercisename" placeholder="Squats" onChange={handleChange} value={editExercise.exercisename} />

                <label htmlFor="weightlifted">Enter Exercise Weight:</label>
                <input className="form-field" id="weightlifted" type="text" name="weightlifted" placeholder="Enter amount in lbs/kg" onChange={handleChange} value={editExercise.weightlifted}/>

                <label htmlFor="reps">Enter Sets X Reps</label>
                <input className="form-field" id="reps" type="text" name="reps" placeholder="Sets X Reps" onChange={handleChange} value={editExercise.reps}/>

                <label htmlFor="restperiod">Enter Rest Time</label>
                <input className="form-field" id="restperiod" type="text" name="restperiod" placeholder="Enter rest time" onChange={handleChange} value={editExercise.restperiod}/>

                {/* <label htmlFor="exerciseRegion">Target Muscle Group:</label>
                <Field className="form field" id="exerciseRegion" type="text" name="exerciseRegion" placeholder="Ex: Legs/Arms/Triceps"/> */}
                <label>
                    Select Target Muscle Group:
                    <select name="exerciseregion" onChange={handleChange} value={editExercise.exerciseregion}>
                        <option value="default">Pick A Group</option>
                        <option value="aerobic">Aerobic</option>
                        <option value="arms">Arms</option>
                        <option value="core">Core</option>
                        <option value="legs">Legs</option>
                        <option value="stretches">Stretches</option>
                        <option value="upperBody">Upper Body</option>
                    </select>
                </label>
                {/* <Link to="/today"> */}
                <button className="form button" type="submit" >Update Exercise</button>
                {/* </Link> */}

            </form>
        </>
    )
}




export default EditExercise;