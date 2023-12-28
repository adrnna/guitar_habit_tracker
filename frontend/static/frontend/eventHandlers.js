console.log('eventHandlers.js is loaded.');


// Check screen width and set initial state
window.addEventListener('load', function() {
    var sidebar = document.querySelector('.sidebar');
    var arrowIcon;
    if (sidebar) {
        const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
        if (toggleSidebarButton) {
            arrowIcon = toggleSidebarButton.querySelector('.navbar');
        }

        if (window.innerWidth > 768) { // Adjust the breakpoint as needed
            sidebar.classList.add("active");
            if (arrowIcon) { 
                arrowIcon.classList.add("active");
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const overlayContainer = document.getElementById("overlayContainer");
    let activeDropdown = null;
    const rolloutOptionsButtons = document.querySelectorAll(".rollout-options-button");
    const collapsibleButton = document.querySelectorAll(".btn-collapsible");
 
    if (rolloutOptionsButtons) {
        rolloutOptionsButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                const rolloutOptionsDiv = button.nextElementSibling;

                if (rolloutOptionsDiv) {
                    rolloutOptionsDiv.classList.toggle("visible");
                }
            })
        })
    }

    // Attach event listener for toggling sidebar
    if (collapsibleButton) {
        collapsibleButton.forEach(function(button) {
            button.addEventListener("click", function() {
                
                if (button.parentElement.classList.contains('toggle-sidebar-button')){
                    toggleSidebar();
                }
            })
        })
    }

    if (overlayContainer) {
        // // Attach event listener for dropdown button clicks
        // overlayContainer.addEventListener("click", function(event) {
        //     const dropdownButton = event.target.closest('.dropdown-button');
        //     if (dropdownButton) {
        //         handleDropdownButtonClick(event, dropdownButton);
        //     }
        // });

        // // Attach event listener for dropdown option clicks
        // overlayContainer.addEventListener("click", function(event) {
        //     if (event.target.classList.contains('dropdown-item')) {
        //         handleDropdownOptionClick(event);
        //     }
        // });

        //Attach event listener for adding and removing stripes
        overlayContainer.addEventListener("click", function(event) {
            const target = event.target;
            const parent = target.parentElement;
            
        //     if (parent) {
        //         if (parent.classList.contains("btn-add-stripe")) {
        //             const originalStripe = target.closest('.stripe-container');
        //             const originalStripeClass = originalStripe.classList[1];
        //             const clonedStripe = originalStripe.cloneNode(true);   
        //             const newStripeNumber = overlayContainer.querySelectorAll('.stripe-container').length + 1;

        //             clonedStripe.classList.remove(originalStripeClass);
        //             clonedStripe.classList.add(`stripe-${newStripeNumber}`);
                    
        //             extraInput.value = parseInt(extraInput.value) + 1;

                    // //add unique ids to time buttons
                    // const btnTimeGroup = clonedStripe.querySelector('.btn-time-group')
                    // const timeInputs = btnTimeGroup.querySelectorAll('input[type="radio"]');
                    // const timeLabels = btnTimeGroup.querySelectorAll('label');
                    // timeInputs.forEach((input, index) => {
                    //     input.id = `time${newStripeNumber}.${index + 1}`;
                    //     input.name = `"selected_time_group_${newStripeNumber}`;
                    //     timeLabels[index].setAttribute('for', input.id);
                    // });           

        //             const originalDropdown = originalStripe.querySelector('.dropdown-item');
        //             const selectedOptionIndex = originalDropdown.getAttribute('data-value');

        //             // insert right after the clicked stripe
        //             originalStripe.insertAdjacentElement('afterend', clonedStripe);
        //         } 
        //         else if (parent.classList.contains("btn-remove-stripe")) {
        //             const stripeToRemove = target.closest('.stripe-container');
        //             overlayContainer.removeChild(stripeToRemove);
        //             extraInput.value = parseInt(extraInput.value) - 1;
        //         }
        //     }
        });
    

        

        overlayContainer.addEventListener("click", function(event) {
            let exerciseForms = document.querySelectorAll(".exercise_form")
            let totalForms = document.querySelector("#id_form-TOTAL_FORMS")
            let formNum = exerciseForms.length-1
            let addFormButton = event.target.closest('.btn-add-stripe');
            let removeFormButton = event.target.closest('.btn-remove-stripe');
            let exerciseForm = event.target.closest(".exercise_form");
            // const inputField = exerciseForm.querySelector("#exercise_name_");
            // console.log(inputField.value)
            // let originalStripe = event.target.closest('.stripe-container');

            if (addFormButton) {
                addForm(exerciseForm, formNum, totalForms);
            }
            else if (removeFormButton) {
                removeForm(exerciseForm,);
            }
        });


        // Attach event listener for collapsible button
        // overlayContainer.addEventListener("click", function(event) {
        //     const collapsibleButton = event.target.closest('.btn-collapsible');
        //     if (collapsibleButton) {
        //         handleCollapsibleButtonClick(collapsibleButton);
        //     }
        // });

        // Attach event listener for clicking outside dropdown
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.custom-dropdown')) {
                const dropdownLists = document.querySelectorAll('.dropdown-list');
                dropdownLists.forEach(dropdownList => {
                    dropdownList.style.display = 'none';
                });
            }
        });

        document.addEventListener("click", function(event) {
            const activeInputBox = document.querySelector(".input-box.active"); 
            if (activeInputBox) {
                if (event.target !== activeInputBox) {
                    activeInputBox.classList.remove("active"); 
                }
            }
        });


        // overlayContainer.addEventListener("keydown", function(event) {
        //     const target = event.target;
        //     console.log("checking if enter pressed...")
    
        //     // Check if the pressed key is "Enter"
        //     if ((event.key === "Enter") && target.classList.contains("input-box") && target.classList.contains("name")){
        //         // Find the corresponding button element within the same stripe
        //         const stripe = target.closest(".stripe-container");
        //         // const button = stripe.querySelector(".btn-confirm");
        //         const button = target.nextElementSibling;
        //         if (button && button.classList.contains("btn-confirm")) {
        //             // Simulate a click on the button
        //             toggleInput(button);
        //         }
        //     }
        // });        
    }
});

// // Function to handle dropdown button click
// function handleDropdownButtonClick(event) {
//     const dropdownButton = event.target;
//     const dropdownList = dropdownButton.nextElementSibling;
//     if (dropdownList === activeDropdown) {
//         activeDropdown.style.display = 'none';
//         activeDropdown = null;
//     } else {
//         if (activeDropdown) {
//             activeDropdown.style.display = 'none';
//         }
//         dropdownList.style.display = 'block';
//         activeDropdown = dropdownList;
//     }
// }

// // Function to handle option selection in dropdown list
// function handleDropdownOptionClick(event) {
//     const dropdownItem = event.target
//     const selectedValue = dropdownItem.dataset.value;
//     if (selectedValue) {
//         const dropdownList = dropdownItem.parentElement
//         const customDropdown = dropdownItem.closest('.custom-dropdown')
//         const dropdownButton = customDropdown.querySelector('.dropdown-button');
//         dropdownButton.textContent = selectedValue;
//         dropdownList.style.display = 'none';
//         activeDropdown = null;
//     }
// }

// Function to handle collapsible button click
// function handleCollapsibleButtonClick(collapsibleButton) {
//     const parentStripeContainer = collapsibleButton.closest('.stripe-and-collapsible');
//     const collapsibleContent = parentStripeContainer.querySelector('.collapsible-content');
//     collapsibleButton.classList.toggle("active");
//     collapsibleContent.classList.toggle("active");
//     // collapsibleContent.style.display = collapsibleContent.style.display === "block" ? "none" : "block";

//     if (collapsibleContent.style.height === "0px" || !collapsibleContent.style.height) {
//         collapsibleContent.style.height = collapsibleContent.scrollHeight + "px"; // Expand the content
//     } else { 
//         collapsibleContent.style.height = null;
//         // collapsibleContent.style.height = "0px"; // Collapse the content
//     }
// }

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
    const arrowIcon = toggleSidebarButton.querySelector('.navbar');
    sidebar.classList.toggle("active");
    arrowIcon.classList.toggle("active");

    if (sidebar.width === "0px" || !sidebar.width) {
        sidebar.width = sidebar.scrollWidth + "px"; // Expand the content
    } else { 
        sidebar.width = null;
    }
}

function addForm(exerciseForm, formNum, totalForms){
    // clone the clicked on form
    let newForm = exerciseForm.cloneNode(true)
    // find the highest stripe number and assign a unique number
    assignStripeNumber(newForm)

    // assign new form number, clone the user-input and insert the form into html
    let formRegex = RegExp(`form-(\\d){1}-`,'g')
    formNum++

    let origInputBox = newForm.querySelector(".input-box.name")
    let origBtnTimeGroup = newForm.querySelector(".btn-time-group")
    let selectedBtn = origBtnTimeGroup.querySelector('input[type="radio"]:checked')
    let selectedBtnId = null;
    if (selectedBtn) {
        selectedBtnId = selectedBtn.id
    }
    
    // this step erases the content of the form:
    newForm.innerHTML = newForm.innerHTML.replace(formRegex, `form-${formNum}-`)

    let newInputBox = newForm.querySelector(".input-box.name")
    if (selectedBtn) {
        let newBtnTimeGroup = newForm.querySelector(".btn-time-group")
        let newSelectedBtn = newBtnTimeGroup.querySelector(`#${selectedBtnId}`)
        newSelectedBtn.checked = true;
    }

    newInputBox.value = origInputBox.value

    exerciseForm.insertAdjacentElement('afterend', newForm);    
    totalForms.setAttribute('value', `${formNum+1}`)
}

function removeForm(exerciseForm,){
    exerciseForm.remove();
}

function assignStripeNumber(newForm){
    let stripeNumbering = document.querySelectorAll(".stripe-container")
    let stripeNumbers = Array.from(stripeNumbering).map(element => {
        return element.className.match(/stripe-(\d+)/)[1];
    });
    let numericNumbers = stripeNumbers.map(Number);
    let highestNumber = Math.max(...numericNumbers);
    newStripeNumber = highestNumber + 1
    
    // assign the correct stripe number
    let currentStripe = newForm.querySelector('.stripe-container');
    let currentClassName = currentStripe.className;
    currentStripe.className = currentClassName.replace(/stripe-\d+/, `stripe-${newStripeNumber}`);

    // assign the correct id to exercise name input
    let exerciseNameBox = currentStripe.querySelector(".input-box.name")
    let exerciseNameId = exerciseNameBox.id
    exerciseNameBox.id = exerciseNameId.replace(/exercise_name_form-\d+\b/g, `exercise_name_form-${newStripeNumber}`);

    // assign correct value input 
    let exerciseName = exerciseNameBox.value

    //add unique ids to time buttons
    const btnTimeGroup = currentStripe.querySelector('.btn-time-group')
    const timeInputs = btnTimeGroup.querySelectorAll('input[type="radio"]');
    const timeLabels = btnTimeGroup.querySelectorAll('label');
    timeInputs.forEach((input, index) => {
        input.id = `id_form-${newStripeNumber-1}-time_${index + 1}`;
        input.name = `"form-${newStripeNumber-1}-time`;
        timeLabels[index].setAttribute('for', input.id);
    });    
}

// function changeColor(inputBox) {
//     inputBox.classList.add("active");
// }

// function toggleInput(button) {
//     const inputBox = button.parentElement.querySelector(".input-box");
//     if (inputBox.value.trim() == "") {
//         console.log("here")
//         inputBox.classList.add("empty")
//         inputBox.classList.add("disappear")
//         setTimeout(function() {
//             inputBox.classList.remove("empty");
//             inputBox.classList.remove("disappear");
//         }, 3000);
//     }else{
//         if (inputBox.disabled) {
//             console.log("here2")
//             inputBox.classList.remove("active");
//             inputBox.disabled = false;
//             button.classList.remove("disabled");
//             inputBox.classList.remove("valid-name");
//             button.innerHTML = '<span class="material-symbols-outlined">done</span>';
//         }else{
//             inputBox.disabled = true;
//             console.log("here3")
//             inputBox.classList.remove("active");
//             button.classList.add("disabled");
//             inputBox.classList.add("valid-name")
//             inputBox.classList.remove("empty")
//             button.innerHTML = '<span class="material-symbols-outlined">edit</span>';
//         }
//     }
// }

// function toggleInput(button) {
//     const inputBox = button.parentElement.querySelector(".input-box");
  
//     if (inputBox.value.trim() === "") {
//       handleEmptyInput(inputBox);
//     } else {
//       handleNonEmptyInput(button, inputBox);
//     }
//   }
  
//   function handleEmptyInput(inputBox) {
//     console.log("here");
//     inputBox.classList.add("empty", "disappear");
  
//     setTimeout(() => {
//       inputBox.classList.remove("empty", "disappear");
//     }, 3000);
//   }
  
//   function handleNonEmptyInput(button, inputBox) {
//     if (inputBox.disabled) {
//       console.log("here2");
//       disableInput(button, inputBox);
//     } else {
//       console.log("here3");
//       enableInput(button, inputBox);
//     }
//   }
  
//   function disableInput(button, inputBox) {
//     inputBox.classList.remove("active");
//     inputBox.disabled = false;
//     button.classList.remove("disabled");
//     inputBox.classList.remove("valid-name");
//     button.innerHTML = '<span class="material-symbols-outlined">done</span>';
//   }
  
//   function enableInput(button, inputBox) {
//     inputBox.disabled = true;
//     inputBox.classList.remove("active");
//     button.classList.add("disabled");
//     inputBox.classList.add("valid-name", "empty");
//     button.innerHTML = '<span class="material-symbols-outlined">edit</span>';
//   }
  

function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
        element.style.boxSizing = 'border-box';
        var offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', function (event) {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset + 'px';

            // Find and expand the parent stripe
            var stripe = event.target.closest('.collapsible-content');
            if (stripe) {
                stripe.style.height = 'auto';
                stripe.style.height = stripe.scrollHeight + 'px';
            }
        });
        element.removeAttribute('data-autoresize');
    });
}



