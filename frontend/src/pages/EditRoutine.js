import React from "react";
import textContent from '../../textContent';


const EditRoutine = () => {
    console.log("EditRoutine page is being rendered!");
  return (
    <div className='content-container'>
      <div className="overlay-content">
        <div className="title-text-container">
          <div className="keyword text-box big-text-box">{ textContent.keywordEdit}</div>
        </div>
        <div id="overlayContainer" className="overlay-container">
            
        </div>
      </div>
    </div>
  );
};

export default EditRoutine;
