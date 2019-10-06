import React, { useState } from "react"
import SpecificWorkoutCard from "./SpecificWorkoutCard"
import axiosWithAuth from "../utils/axiosWithAuth"
import { SecondaryBtn } from "./Buttons"

export default function SpecificWorkout(props) {
    const [edit, setEdit] = useState(false)
    const [exerciseID, setExerciseID] = useState("")
    let exerciseArray = Array.from(props.entireWorkout[0])
    console.log(exerciseArray, "exersiceArray")
    let workoutID = props.entireWorkout[1]
    const refresh = () => {
        axiosWithAuth()
            .get(`https://lifting-weights-java.herokuapp.com/workouts/${workoutID}`)
            .then(res => {
                exerciseArray = res.data
            })
            .catch(err => console.log('SpecificWorkout.js axios failed b/c ', err.response))
    }
    const showEdit = (id) => {
        setEdit(!edit)
        setExerciseID(id)
    }
    const hideEdit = () => {
        refresh()
        setEdit(!edit)
    }


    if (edit) {
        //show an edit form
        const newBlankExercise = {
            exercisename: "",
            weightlifted: "",
            reps: "",
            restperiod: "",
            exerciseregion: ""
        }
        function EditExercise(props) {
            const [editExercise, setEditExercise] = useState(newBlankExercise);

            const handleSubmit = (event) => {
                event.preventDefault();
                axiosWithAuth()
                    .put(`https://lifting-weights-java.herokuapp.com/exercise/${exerciseID}`, editExercise)
                    .then(results => {
                        console.log("result of post within handleSubmit in SpecificWorkout.js", results)
                        setEditExercise(newBlankExercise)
                        props.getWorkouts()
                        hideEdit()
                    })
                    .catch(error => {
                        console.log("error, did not post data correctly inside handlesubmit in SpecificWorkout.js", error.response)
                    })
            }

            const handleChange = event => {
                // console.log("handle change inside edit exercise is called");
                setEditExercise({ ...editExercise, [event.target.name]: event.target.value })
                // console.log('handle change in edit exercise w/ new values', editExercise)
            }

            return (
                <>
                    <form className="form" onSubmit={(event) => { handleSubmit(event) }} autoComplete="on">
                        <label htmlFor="exercisename">Enter Exercise Name:</label>
                        <input className="form-field" id="exercisename" type="text" name="exercisename" placeholder="Squats" onChange={handleChange} value={editExercise.exercisename} />

                        <label htmlFor="weightlifted">Enter Exercise Weight:</label>
                        <input className="form-field" id="weightlifted" type="text" name="weightlifted" placeholder="Enter amount in lbs/kg" onChange={handleChange} value={editExercise.weightlifted} />

                        <label htmlFor="reps">Enter Sets X Reps</label>
                        <input className="form-field" id="reps" type="text" name="reps" placeholder="Sets X Reps" onChange={handleChange} value={editExercise.reps} />

                        <label htmlFor="restperiod">Enter Rest Time</label>
                        <input className="form-field" id="restperiod" type="text" name="restperiod" placeholder="Enter rest time" onChange={handleChange} value={editExercise.restperiod} />

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


                    </form>
                </>
            )
        }
        EditExercise(props)
    } else {
        return (
            <div>
                {
                    exerciseArray.map(exercise => (
                        <div>
                            <SpecificWorkoutCard key={exercise.exerciseid} exercise={exercise}></SpecificWorkoutCard>
                            <SecondaryBtn onClick={showEdit(exercise.exerciseid)}>Edit Exercise</SecondaryBtn>
                        </div>
                    ))
                }
            </div>
        )
    }
}