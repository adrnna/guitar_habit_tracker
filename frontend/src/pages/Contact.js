import React from "react";

const Contact = () => {
    console.log("Contact page is being rendered!");
  return (
    <div>
      <h1 className="center-text">Contact Page</h1>
      <div className="overlay-content">
        <p className="motivation-text">Your motivation text</p>
        <div id="overlayContainer" className="overlay-container">
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
