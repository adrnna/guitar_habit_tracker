import React, { useState } from 'react';

const CollapsibleButton = () => {
  const [isActive, setIsActive] = useState(false);


  // this is not working:
  const handleCollapsibleButtonClick = (event) => {
    setIsActive(!isActive);

    const collapsibleButton = event.currentTarget;
    const parentStripeContainer = collapsibleButton.closest('.stripe-and-collapsible');
    const collapsibleContent = parentStripeContainer.querySelector('.collapsible-content');

    if (!collapsibleContent.style.height) {
        collapsibleContent.style.height = collapsibleContent.scrollHeight + "px"; // Expand the content
        collapsibleContent.classList.add('active');
        collapsibleButton.classList.add('active');
    } else { 
        collapsibleContent.style.height = null;
        collapsibleContent.classList.remove('active');
        collapsibleButton.classList.remove('active');
    }
  };

  return (
    <div className="collapsible">
      <button type="button" className="btn-collapsible" onClick={handleCollapsibleButtonClick}>
        <span className="material-symbols-outlined">arrow_drop_down_circle</span>
      </button>
    </div>
  );
};

export default CollapsibleButton;
