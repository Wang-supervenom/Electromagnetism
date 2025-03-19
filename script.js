function showMessage() {
    document.getElementById("message").innerText = "You clicked the button!";
}
function showWelcomeLetter() {
    let letter = document.getElementById("welcome-letter");
    letter.style.display = "block";
    document.getElementById("letter-content").innerHTML = `
        Dear Learner,<br><br>
        Welcome to the Electromagnetism Learning Website! Here, you'll find interactive lessons,
        simulations, and explanations to help you understand the fundamental concepts of electromagnetism.<br><br>
        Stay curious and keep exploring!<br><br>
        Best regards,<br>
        [Your Name]
    `;
}
