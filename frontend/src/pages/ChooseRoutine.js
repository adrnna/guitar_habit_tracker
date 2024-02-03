import React, { useEffect, useState } from "react";
import textContent from '../../textContent';
import { useNavigate } from 'react-router-dom';
import SingleRoutineStripe from "../components/SingleRoutineStripe";
// import { useSidebar } from '../components/SidebarContext';


const ChooseRoutine = () => {

  console.log("ChooseRoutine page is being rendered!");

  // const { isSidebarActive } = useSidebar();
  // console.log(isSidebarActive);

  const navigate = useNavigate();

  const [routineList, setRoutineList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState();
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const routineResponse = await fetch('api/routines/');
      if (!routineResponse.ok) {
        throw new Error(`Error: ${routineResponse.status}`);
      }
      const routineData = await routineResponse.json();
      setRoutineList(routineData.reverse());

      const exerciseResponse = await fetch('api/exercises/');
      if (!exerciseResponse.ok) {
        throw new Error(`Error: ${exerciseResponse.status}`);
      }
      const exerciseData = await exerciseResponse.json();
      setExerciseList(exerciseData);

      // Simulate a minimum loading duration
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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
        </div>
        <div id="overlayContainer" className="overlay-container active">
          {/* Wait for exerciseList to be populated before rendering components */}
          {loading ? (
            <div className="spinner"></div>
          ) : (
            routineList.map((routine, index) => (              
              <SingleRoutineStripe 
                key={index}
                routine={routine} 
                exerciseList={exerciseList}
                chosen={false}
                handleRoutineClick={handleRoutineClick}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseRoutine;
