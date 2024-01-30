import React from "react";
import textContent from '../../textContent';
import FilteredExercises from './FilteredExercises';


const SingleRoutineStripe = ({routine, exerciseList, chosen}) => {  

    const exerciseIds = routine.exercises;
    const filteredExercises = FilteredExercises({exerciseIds, exerciseList});

    return (
        <div className={`routine_container ${chosen ? 'chosen' : ''}`}>
            <div className="routine_title">{textContent.routineTitle}{routine.routine_name}</div>
            <div className={`overlay-stripe routine ${chosen ? 'chosen' : ''}`}>
                <div className="routine-table-container">
                    <table className="routine-table">
                        <thead>
                            <tr>
                                <th>{textContent.type}</th>
                                <th>{textContent.exName}</th>
                                <th>{textContent.time}</th>
                                <th>{textContent.description}</th>
                                {/* <th>{textContent.link}</th> */}
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
                                    {/* <td>{exercise.link}</td> */}
                                </tr>
                                ) : null
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
  
export default SingleRoutineStripe;
  