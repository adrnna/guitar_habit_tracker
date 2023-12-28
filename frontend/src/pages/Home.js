import React from "react";
import BarChart from '../components/BarChart';

const Home = () => {
    console.log("Home component is being rendered!");
  return (
    <div>
      <h1 className="center-text">Your Page Title</h1>
      <div className="overlay-content">
        <p className="motivation-text">Your motivation text</p>
        <div id="overlayContainer" className="overlay-container">
            <div className="chart-canvas" style={{ height: "500px" }}>
                <BarChart/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
