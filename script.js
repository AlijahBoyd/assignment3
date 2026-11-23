// Select the Day/Night Mode button
const themeButton = document.getElementById("themeButton");

// Listen for a click and toggle the dark-mode class
if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Update the button text based on the current theme
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Switch to Day Mode";
        } else {
            themeButton.textContent = "Switch to Night Mode";
        }
    });
}
