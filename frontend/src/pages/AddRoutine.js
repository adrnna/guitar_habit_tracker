import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import textContent from '../../textContent';
import RoutineForm from '../components/RoutineForm';
import guitar_pic from '../../static/images/guitar_pic.png';


const AddRoutine = () => {
  console.log("AddRoutine page is being rendered!");

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const overlayStripeElem = document.querySelectorAll(".overlay-stripe-elements");
  const [sidebar, setSidebar] = useState(null);

  useEffect(() => {
    // const overlayStripeElem = document.querySelectorAll(".overlay-stripe-elements");
    // const sidebar = document.querySelector(".sidebar");

    const handleAfterLoad = () => {
      const newSidebar = document.querySelector(".sidebar.active");
      setSidebar(newSidebar);
      if (newSidebar && newSidebar.classList.contains("active")) {
        console.log("YES");
      }
    };
    handleAfterLoad();

    // Check if everything is loaded, then execute handleAfterLoad
    // if (document.readyState === 'complete') {
    //   handleAfterLoad();
    // } else {
    //   window.addEventListener('load', handleAfterLoad);
    // }

    // Cleanup the event listener on component unmount
    // return () => {
    //   window.removeEventListener('load', handleAfterLoad);
    // };
  }, [sidebar]);


  useEffect(() => {
    if (success) {
      navigate('/add-routine/success');
    }
  }, [success, navigate]);

  return (
    <div className='content-container'>
      <div className="overlay-content">
        <div className="title-text-container">
          <div className="keyword text-box big-text-box">{ textContent.keywordAddRoutine}</div>
          {/* <div className="text-box">{ textContent.titleAddRoutine }</div> */}
          {/* <div className="text-box">{ textContent.newRoutineTitle }</div> */}
        </div>
        <div id="overlayContainer" className="overlay-container">
          <p className="overlay-text">{ textContent.newRoutineInstructions }</p>
          <RoutineForm
            setSuccess={setSuccess}
          />
        </div>
        <img src={guitar_pic} alt="Guitar image" className="guitar-image"/>
      </div>
    </div>
  );
};

export default AddRoutine;
