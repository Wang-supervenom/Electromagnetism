function toggleWelcomeLetter() {
    let letter = document.getElementById("welcome-letter");
    let button = document.getElementById("toggle-welcome-btn");

    if (letter.style.display === "none") {
        letter.style.display = "block";
        button.innerText = "Hide Welcome Letter";
        document.getElementById("letter-content").innerHTML = `
            <h2>Welcome to the Electromagnetism Learning Community!</h2>
            <p><strong>Dear E and M Enthusiasts,</strong></p>

            <p>Welcome to my Electromagnetism Learning Website! I am thrilled that you have taken an interest in exploring the fascinating world of electromagnetism. This website is designed to help you navigate fundamental concepts, discover valuable resources, and engage in meaningful learning experiences.</p>

            <p>Electromagnetism is one of the four fundamental forces of nature, governing everything from the behavior of electric charges to the transmission of light and radio waves. Understanding it is crucial not only for physics but also for engineering, technology, and even everyday applications like wireless communication and electric circuits.</p>

            <p>This guide will help you:</p>
            <ul>
                <li>Understand key concepts in electromagnetism, from Coulomb’s Law to Maxwell’s Equations.</li>
                <li>Explore essential resources, such as textbooks, academic articles, and online lectures.</li>
                <li>Engage with thought-provoking questions and interactive examples.</li>
                <li>Develop problem-solving skills through practice exercises and real-world applications.</li>
                <li>Create and share your own research-based insights to deepen your understanding.</li>
            </ul>

            <p>As someone who is passionate about physics, I believe that learning should be engaging, accessible, and interactive. My goal with this website is to provide a structured yet flexible learning environment where you can explore electromagnetism at your own pace. Whether you are a student, an educator, or simply someone curious about the world, I hope you find this resource valuable.</p>

            <p>I encourage you to challenge ideas, ask questions, and actively participate in discussions. If you ever have any questions, suggestions, or interesting insights to share, feel free to reach out! Learning is a continuous journey, and I am excited to have you join me in this exploration of electromagnetism.</p>

            <p><strong>Best regards,</strong><br>Evan Wang</p>
        `;
    } else {
        letter.style.display = "none";
        button.innerText = "View Welcome Letter";
    }
}
