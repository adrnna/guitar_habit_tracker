import React from 'react';

const InputFieldUtils = () => {
  function handleFocus(event) {
    const inputBox = event.target;
    inputBox.classList.add("active");
    const activeInputBox = document.querySelector(".input-box.active");
    if (activeInputBox && inputBox !== activeInputBox) {
      activeInputBox.classList.remove("active");
    }
  }

  // Define other utility functions here

  return {
    handleFocus,
    // Other utility functions here
  };
};

export default InputFieldUtils;
