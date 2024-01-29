import React, { useEffect, useState } from "react";
import textContent from '../../textContent';
import { useNavigate } from 'react-router-dom';
import SingleRoutineStripe from "../components/SingleRoutineStripe";
import { useSidebar } from '../components/SidebarContext';


const ChooseRoutine = () => {

  console.log("ChooseRoutine page is being rendered!");

  // const { isSidebarActive } = useSidebar();
  // console.log(isSidebarActive);

  const navigate = useNavigate();

  const [routineList, setRoutineList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const routineResponse = await fetch('api/routines/');
        if (!routineResponse.ok) {
          throw new Error(`Error: ${routineResponse.status}`);
        }
        const routineData = await routineResponse.json();
        // flip the order so the newest routine is on top
        setRoutineList(routineData.reverse());

        const exerciseResponse = await fetch('api/exercises/');
        if (!exerciseResponse.ok) {
          throw new Error(`Error: ${exerciseResponse.status}`);
        }
        const exerciseData = await exerciseResponse.json();
        setExerciseList(exerciseData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRoutineClick  = (routine) => {
    setSelectedRoutine(routine);
    navigate(`/choose-routine/${routine.id}`, { state: { selectedRoutine: routine, exerciseList: exerciseList} });
  };

  return (
    <div className='content-container'>
      <div className="overlay-content">
        <div className="title-text-container">
          <div className="keyword text-box big-text-box">{ textContent.keywordChooseRoutine}</div>
          {/* <div className="text-box">{ textContent.titleAddRoutine }</div>
          <div className="text-box">{ textContent.newRoutineTitle }</div> */}
        </div>
        <div id="overlayContainer" className="overlay-container active">
          {routineList.map((routine, index) => (
            <div key={index} className="stripe-container ">
                <div className="stripe-and-collapsible" onClick={() => handleRoutineClick(routine)}>
                  <SingleRoutineStripe 
                    routine={routine} 
                    exerciseList={exerciseList}
                    chosen={false}
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseRoutine;
