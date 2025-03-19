function toggleWelcomeLetter() {
    let expandedContent = document.getElementById("expanded-content");
    let button = document.getElementById("toggle-welcome-btn");

    if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
        expandedContent.style.display = "block";
        button.innerText = "Hide Welcome Letter";
    } else {
        expandedContent.style.display = "none";
        button.innerText = "Read More";
    }
}
