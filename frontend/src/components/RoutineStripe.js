import React,{ useState } from "react";
import SingleRoutineStripe from "./SingleRoutineStripe";


const RoutineStripe = ({index, routine, exerciseList}) => {  

    console.log("Rendering RoutineStripe");

    const [selectedRoutine, setSelectedRoutine] = useState(routine);

    const handleRoutineClick  = () => {
        setSelectedRoutine(routine);
        console.log(selectedRoutine);
      };

    return (
        <div key={index} className="stripe-container ">
            <div className="stripe-and-collapsible overlay-stripe routine" onClick={handleRoutineClick}>
                <SingleRoutineStripe 
                routine={selectedRoutine} 
                exerciseList={exerciseList}
                />
            </div>
        </div>
    );
};
  
export default RoutineStripe;