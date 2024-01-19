import React from "react";
import textContent from '../../textContent';


const About = () => {

    console.log("About page is being rendered!");

  return (
    <div className='content-container'>
      <div className="overlay-content">
      <div className="title-text-container">
          <div className="keyword text-box big-text-box">{ textContent.keywordAbout}</div>
            {/* <div className="text-box">{ textContent.titleAddRoutine }</div> */}
            {/* <div className="text-box">{ textContent.newRoutineTitle }</div> */}
          </div>
        <div id="overlayContainer" className="overlay-container">
            
        </div>
      </div>
    </div>
  );
};

export default About;
