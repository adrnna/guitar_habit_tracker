import React from "react";
import textContent from '../../textContent';


const RoutineStripe = ({index, routine, exerciseList}) => {  

    const exerciseIds = routine.exercises;

    const filteredExercises = exerciseIds.map((exerciseId) => {
        return exerciseList.find((exercise) => exercise.id === exerciseId);
    });

    return (
        <div key={index} className="stripe-container">
            <div className="stripe-and-collapsible">
                <div className="overlay-stripe routine" >
                    <p className="routine_title">{textContent.routineTitle}{routine.routine_name}</p>
                    <div className="routine-table-container">
                    <table className="routine-table">
                        <thead>
                            <tr>
                                <th>{textContent.type}</th>
                                <th>{textContent.exName}</th>
                                <th>{textContent.time}</th>
                                <th>{textContent.description}</th>
                                <th>{textContent.link}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExercises.map((exercise) => (
                            // check if exercise is defined before trying to access its properties
                            exercise ? (
                                <tr key={exercise.id}>
                                  <td>{exercise.exercise_type}</td>
                                  <td>{exercise.exercise_name}</td>
                                  <td>{exercise.time}</td>
                                  <td>{exercise.description}</td>
                                  <td>{exercise.link}</td>
                                </tr>
                              ) : null
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default RoutineStripe;
  