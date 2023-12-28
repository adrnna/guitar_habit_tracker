import React from 'react';
// import InputFieldUtils from './InputFieldUtils';

const InputField = ({ onInput, placeholder, className }) => {

  const handleFocus = (event) => {
    const inputBox = event.target;
    inputBox.classList.add("active");
    const activeInputBox = document.querySelector(".input-box.active");
    // this is not working:
    if (activeInputBox && inputBox !== activeInputBox) {
      activeInputBox.classList.remove("active");
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      // Trigger the same functionality as the button click
      const inputbox = event.target
      const button = inputbox.querySelector(".btn");
      console.log(inputbox)
      console.log(button)
      toggleInput(button);
    }
  };

  function toggleInput(event) {
    const button = event.currentTarget;
    console.log(button);
    const inputBox = button.parentElement.querySelector(".input-box");
  
    if (inputBox.value.trim() === "") {
      handleEmptyInput(inputBox);
    } else {
      handleNonEmptyInput(button, inputBox);
    }
  }
  
  function handleEmptyInput(inputBox) {
    console.log("here");
    inputBox.classList.add("empty", "disappear");
  
    setTimeout(() => {
      inputBox.classList.remove("empty", "disappear");
    }, 3000);
  }
  
  function handleNonEmptyInput(button, inputBox) {
    if (inputBox.disabled) {
      console.log("here2");
      disableInput(button, inputBox);
    } else {
      console.log("here3");
      enableInput(button, inputBox);
    }
  }
  
  function disableInput(button, inputBox) {
    inputBox.classList.remove("active");
    inputBox.disabled = false;
    button.classList.remove("disabled");
    inputBox.classList.remove("valid-name");
    button.innerHTML = '<span class="material-symbols-outlined">done</span>';
  }
  
  function enableInput(button, inputBox) {
    inputBox.disabled = true;
    inputBox.classList.remove("active");
    button.classList.add("disabled");
    inputBox.classList.add("valid-name", "empty");
    button.innerHTML = '<span class="material-symbols-outlined">edit</span>';
  }



  return (
    <div className="input-container">
      <input
        className={className}
        type="text"
        onInput={onInput}
        onFocus={handleFocus}
        onKeyDown={handleEnterKey}
        placeholder={placeholder}
      />
      <button type="button" className="btn btn-confirm" onClick={toggleInput}>
        <span className="material-symbols-outlined">check</span>
      </button>
    </div>
  );
};

export default InputField;
