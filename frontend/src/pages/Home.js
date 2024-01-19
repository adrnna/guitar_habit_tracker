import React from "react";
import BarChart from '../components/BarChart';
import { motion } from 'framer-motion';
import textContent from '../../textContent';


const Home = () => {
    console.log("Home component is being rendered!");

    const containerVariants = {
      hidden: { opacity: 0, x: '100%'},
      visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
    };

    return (
      <div className='content-container'>
        <div className="overlay-content">
          <div className="title-text-container">
            <div className="keyword text-box big-text-box">{ textContent.keywordHome}</div>
            {/* <div className="text-box">{ textContent.titleAddRoutine }</div> */}
            {/* <div className="text-box">{ textContent.newRoutineTitle }</div> */}
          </div>
          <motion.div
            id="overlayContainer"
            className="overlay-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="chart-canvas" style={{ height: "500px" }}>
              <BarChart />
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

export default Home;
