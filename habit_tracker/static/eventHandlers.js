document.addEventListener("DOMContentLoaded", function() {
    const overlayContainer = document.getElementById("overlayContainer");
    let activeDropdown = null;
    const rolloutOptionsButtons = document.querySelectorAll(".rollout-options-button");
    // const rolloutOptionsButtons = document.getElementById("rolloutOptionsButton");
    // const rolloutOptionsDiv = rolloutOptionsButtons.nextElementSibling;
    // const rolloutOptionsDiv = document.querySelector("#rolloutOptions");
    // const newSessionOptionsDiv = document.getElementById("rolloutOptions");

    if (rolloutOptionsButtons) {
        rolloutOptionsButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                // const rolloutOptionsDiv = button.closest("#rolloutOptions");
                const rolloutOptionsDiv = button.nextElementSibling;
                // const rolloutOptionsDiv = button.closest("#rolloutOptions");
                console.log(rolloutOptionsDiv);
                console.log("clicked");

                if (rolloutOptionsDiv) {
                    console.log("clicked and has options");
                    rolloutOptionsDiv.classList.toggle("visible");
                }
            })
        })
    };


    if (overlayContainer) {
        // Attach event listener for dropdown button clicks
        overlayContainer.addEventListener("click", function(event) {
            const dropdownButton = event.target.closest('.dropdown-button');
            if (dropdownButton) {
                handleDropdownButtonClick(event, dropdownButton);
            }
        });

        // Attach event listener for dropdown option clicks
        overlayContainer.addEventListener("click", function(event) {
            if (event.target.classList.contains('dropdown-item')) {
                handleDropdownOptionClick(event);
            }
        });

        overlayContainer.addEventListener("click", function(event) {
            const target = event.target;
            const parent = target.parentElement;
            
            if (parent) {
                if (parent.classList.contains("btn-add-stripe")) {
                    const originalStripe = target.closest('.stripe-container');
                    const originalStripeClass = originalStripe.classList[1];
                    const clonedStripe = originalStripe.cloneNode(true);
                    const newStripeNumber = overlayContainer.querySelectorAll('.stripe-container').length + 1;

                    clonedStripe.classList.remove(originalStripeClass);
                    clonedStripe.classList.add(`stripe-${newStripeNumber}`);

                    const originalDropdown = originalStripe.querySelector('.dropdown-item');
                    const selectedOptionIndex = originalDropdown.getAttribute('data-value');

                    originalStripe.insertAdjacentElement('afterend', clonedStripe);
                } else if (parent.classList.contains("btn-remove-stripe")) {
                    const stripeToRemove = target.closest('.stripe-container');
                    overlayContainer.removeChild(stripeToRemove);
                }
            }
        });

        overlayContainer.addEventListener("click", function(event) {
            const collapsibleButton = event.target.closest('.btn-collapsible');
            if (collapsibleButton) {
                handleCollapsibleButtonClick(collapsibleButton);
            }
        });

        // Attach event listener for clicking outside dropdown
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.custom-dropdown')) {
                const dropdownLists = document.querySelectorAll('.dropdown-list');
                dropdownLists.forEach(dropdownList => {
                    dropdownList.style.display = 'none';
                });
            }
        });
    }

    // Function to handle dropdown button click
    function handleDropdownButtonClick(event) {
        const dropdownButton = event.target;
        const dropdownList = dropdownButton.nextElementSibling;
        if (dropdownList === activeDropdown) {
            activeDropdown.style.display = 'none';
            activeDropdown = null;
        } else {
            if (activeDropdown) {
                activeDropdown.style.display = 'none';
            }
            dropdownList.style.display = 'block';
            activeDropdown = dropdownList;
        }
    }

    // Function to handle option selection in dropdown list
    function handleDropdownOptionClick(event) {
        const dropdownItem = event.target
        const selectedValue = dropdownItem.dataset.value;
        if (selectedValue) {
            const dropdownList = dropdownItem.parentElement
            const customDropdown = dropdownItem.closest('.custom-dropdown')
            const dropdownButton = customDropdown.querySelector('.dropdown-button');
            dropdownButton.textContent = selectedValue;
            dropdownList.style.display = 'none';
            activeDropdown = null;
        }
    }

    // Function to handle collapsible button click
    function handleCollapsibleButtonClick(collapsibleButton) {
        const parentStripeContainer = collapsibleButton.closest('.stripe-and-collapsible');
        const collapsibleContent = parentStripeContainer.querySelector('.collapsible-content');
        collapsibleButton.classList.toggle("active");
        collapsibleContent.classList.toggle("active");
        // collapsibleContent.style.display = collapsibleContent.style.display === "block" ? "none" : "block";
    
        if (collapsibleContent.style.height === "0px" || !collapsibleContent.style.height) {
            collapsibleContent.style.height = collapsibleContent.scrollHeight + "px"; // Expand the content
        } else { 
            collapsibleContent.style.height = null;
            // collapsibleContent.style.height = "0px"; // Collapse the content
        }
    }
    
});
