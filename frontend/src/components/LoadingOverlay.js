// LoadingOverlay.jsx
import React from 'react';
import textContent from '../../textContent';

const LoadingOverlay = () => {

  return (
    <div className="loading-overlay">
      {/* <div className="spinner"></div> */}
      <div className="loading-text">
        <h2>{textContent.loadingOverlayText}</h2>
      </div>
    </div>
  );
};

export default LoadingOverlay;
