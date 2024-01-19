import React from 'react';

const InputFieldUtils = ({classNameContainer, children}) => {

  function handleFocus(event) {
    const inputBox = event.target;
    inputBox.classList.add("active");
    const activeInputBox = document.querySelector(".input-box.active");
    if (activeInputBox && inputBox !== activeInputBox) {
      activeInputBox.classList.remove("active");
    }
  }


  return (
    <div className={classNameContainer} onFocus={handleFocus}>
      {children}
    </div>
  );
};

export default InputFieldUtils;
