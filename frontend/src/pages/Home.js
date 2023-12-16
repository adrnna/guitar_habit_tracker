import React from "react";

const Home = () => {
    console.log("Home component is being rendered!");
  return (
    <div>
      <h1 className="center-text">Your Page Title</h1>
      <div className="overlay-content">
        <p className="motivation-text">Your motivation text</p>
        <div id="overlayContainer" className="overlay-container">
            <div className="chart-canvas" style={{ height: "500px" }}>
                <canvas id="myChart"></canvas>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
