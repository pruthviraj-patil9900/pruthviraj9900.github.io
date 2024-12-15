// Example JavaScript file for GitHub Pages website

// Function to display a welcome message
function showWelcomeMessage() {
    const message = "Welcome to My GitHub Pages Website!";
    const welcomeDiv = document.getElementById("welcome-message");
    if (welcomeDiv) {
        welcomeDiv.textContent = message;
        welcomeDiv.style.color = "blue";
        welcomeDiv.style.fontSize = "24px";
        welcomeDiv.style.fontWeight = "bold";
    }
}

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Helper function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the button
window.onload = function() {
    // Show welcome message on page load
    showWelcomeMessage();

    // Add event listener to the button
    const button = document.getElementById("change-color-button");
    if (button) {
        button.addEventListener("click", changeBackgroundColor);
    }
};
