import React from "react";
import BarChart from '../components/BarChart';
import { m } from 'framer-motion';

const Home = () => {
    console.log("Home component is being rendered!");

    const containerVariants = {
      hidden: { opacity: 0, x: 0},
      visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
    };

    return (
      <div>
        <h1 className="center-text">Your Page Title</h1>
        <div className="overlay-content">
          <p className="motivation-text">Your motivation text</p>
          <m.div
            id="overlayContainer"
            className="overlay-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="chart-canvas" style={{ height: "500px" }}>
              <BarChart />
            </div>
          </m.div>
        </div>
      </div>
    );
  };

export default Home;
