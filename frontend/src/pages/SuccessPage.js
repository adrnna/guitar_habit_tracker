import React from "react";

const Success = () => {
    console.log("Success page is being rendered!");
  return (
    <div>
      <h1 className="center-text">Success Page</h1>
      <div className="overlay-content">
        <p className="motivation-text">FORM SUBMITTED SUCCESSFULLY!</p>
        <div id="overlayContainer" className="overlay-container">
  
        </div>
      </div>
    </div>
  );
};

export default Success;
