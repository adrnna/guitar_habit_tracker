import React, { useEffect, useState } from "react";
import textContent from '../../textContent';


const RoutineStripe = ({index, routine, exerciseList}) => {  
  
    console.log(routine.exercises);

    return (
        <div key={index} className="stripe-container">
            <div className="stripe-and-collapsible">
                <div className="overlay-stripe routine" >
                    <p className="routine_title">Routine Name: {routine.routine_name}</p>
                    {/* Add more content related to each routine */}
                    <div className="routine-table-container">
                    <table className="routine-table">
                        <thead>
                            <tr>
                                <th>Exercise Name</th>
                                <th>Time (min)</th>
                                <th>Description</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default RoutineStripe;
  