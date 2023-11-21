let timer;
let time = 0;

document.addEventListener("DOMContentLoaded", function() {
    startTimerButton = document.getElementById('startTimer')

    if (startTimerButton) {
        startTimerButton.addEventListener('click', function() {
            const timerDisplay = document.getElementById('timerDisplay');

            if (timer) {
                clearInterval(timer);
                this.textContent = "Start Timer";
                timer = null;
            } else {
                this.textContent = "Stop Timer";
                timer = setInterval(function() {
                    time += 1;
                    timerDisplay.textContent = time;  // Update the display
                    console.log(time + " seconds elapsed");
                }, 1000);
            }
        });
    }
});
