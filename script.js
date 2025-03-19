function toggleWelcomeLetter() {
    let letter = document.getElementById("welcome-letter");
    let button = document.getElementById("toggle-welcome-btn");

    if (letter.style.display === "none") {
        letter.style.display = "block";
        button.innerText = "Hide Welcome Letter";
        document.getElementById("letter-content").innerHTML = `
            <h2>Welcome to the Electromagnetism Learning Community!</h2>
            <p><strong>Dear E and M Enthusiasts,</strong></p>
            <p>I'm thrilled to welcome you to this exciting research community! Here, we strive to explore and understand 
            <strong>Electromagnetism</strong>, analyze its impact, and share valuable knowledge with others.</p>
            <p>This guide will help you:</p>
            <ul>
                <li>Understand key concepts</li>
                <li>Explore essential resources and databases</li>
                <li>Engage with fellow researchers and contribute to discussions</li>
                <li>Create and share your own research-based assets</li>
            </ul>
            <p>As a member of this community, your insights and contributions are invaluable. We encourage you to ask questions, 
            challenge ideas, and participate actively.</p>
            <p>If you have any questions, feel free to reach out!</p>
            <p><strong>Best regards,</strong><br>Evan Wang</p>
        `;
    } else {
        letter.style.display = "none";
        button.innerText = "View Welcome Letter";
    }
}
