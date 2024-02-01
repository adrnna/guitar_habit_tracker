import React, { useEffect, useState } from "react";
import textContent from '../../textContent';
import FilteredExercises from './FilteredExercises';


const SingleRoutineStripe = ({routine, exerciseList, chosen, handleRoutineClick}) => {  
    console.log("single routine stripe");

    const exerciseIds = routine.exercises;
    const filteredExercises = FilteredExercises({exerciseIds, exerciseList});
    const [totalTime, setTotalTime] = useState(0);


    useEffect(() => {
        const calculateTotalTime = () => {
          let totalTime = 0;
    
          filteredExercises.forEach((exercise) => {
            if (exercise) {
              const numericTime = parseFloat(exercise.time);
              if (!isNaN(numericTime)) {
                totalTime += numericTime;
              }
            }
          });
    
          setTotalTime(totalTime);
        };
    
        calculateTotalTime();
      }, [exerciseList]);
    
    return (
        <div className="stripe-container">

            <div className="stripe-and-collapsible routine" onClick={() => handleRoutineClick(routine)}>
                <div className="total-time">
                    <div>{totalTime}</div>
                    <div className="time-unit">&nbsp;{textContent.timeUnit}</div>
                </div>
                <div className={`routine-container ${chosen ? 'chosen' : ''}`}>
                    <div className="routine-title">{textContent.routineTitle}{routine.routine_name}</div>
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
            </div>
        </div>
    );
};
  
export default SingleRoutineStripe;
  