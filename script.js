function toggleWelcomeLetter() {
    let expandedContent = document.getElementById("expanded-content");
    let button = document.getElementById("toggle-welcome-btn");

    if (expandedContent.style.display === "none") {
        expandedContent.style.display = "block";
        button.innerText = "Hide Welcome Letter";
    } else {
        expandedContent.style.display = "none";
        button.innerText = "Read More";
    }
}

<script>
function toggleCalculator() {
    const calculator = document.getElementById("calculator");
    const button = document.getElementById("calc-btn");
    if (calculator.style.display === "none") {
        calculator.style.display = "block";
        button.innerText = "Hide Coulomb Calculator";
    } else {
        calculator.style.display = "none";
        button.innerText = "Open Coulomb Calculator";
    }
}

function calculateForce() {
    const k = 8.99e9; // Coulomb constant
    let q1 = parseFloat(document.getElementById("charge1").value);
    let q2 = parseFloat(document.getElementById("charge2").value);
    let r = parseFloat(document.getElementById("distance").value);

    if (r <= 0) {
        alert("Distance must be greater than zero.");
        return;
    }

    let force = (k * q1 * q2) / (r * r);
    document.getElementById("result").innerText = force.toExponential(3);
}
</script>
