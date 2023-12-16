import React from "react";

const PlayRoutine = () => {
    console.log("PlayRoutine page is being rendered!");
  return (
    <div>
      <h1 className="center-text">PlayRoutine Page</h1>
      <div className="overlay-content">
        <p className="motivation-text">Your motivation text</p>
        <div id="overlayContainer" className="overlay-container">
            
        </div>
      </div>
    </div>
  );
};

export default PlayRoutine;
