function toggleWelcomeLetter() {
    let letter = document.getElementById("welcome-letter");
    let button = document.getElementById("toggle-welcome-btn");

    if (letter.style.display === "none" || letter.style.display === "") {
        letter.style.display = "block";
        button.innerText = "Hide Welcome Letter";
    } else {
        letter.style.display = "none";
        button.innerText = "View Welcome Letter";
    }
}
