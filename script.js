// 展开/关闭 Welcome Letter
function toggleWelcomeLetter() {
    const expandedContent = document.getElementById("expanded-content");
    const button = document.getElementById("toggle-welcome-btn");

    if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
        expandedContent.style.display = "block";
        button.innerText = "Hide Welcome Letter";
    } else {
        expandedContent.style.display = "none";
        button.innerText = "Read More";
    }
}

// 展开/关闭 Coulomb Calculator（嵌入在 coulombs-law.html 里）
function toggleCalculator() {
    const calculator = document.getElementById("calculator");
    const button = document.getElementById("calc-btn");

    if (calculator.style.display === "none" || calculator.style.display === "") {
        calculator.style.display = "block";
        button.innerText = "Hide Coulomb Calculator";
    } else {
        calculator.style.display = "none";
        button.innerText = "Open Coulomb Calculator";
    }
}

// 计算库仑力
function calculateForce() {
    const k = 8.99e9; // N·m²/C²
    const q1 = parseFloat(document.getElementById("charge1").value);
    const q2 = parseFloat(document.getElementById("charge2").value);
    const r = parseFloat(document.getElementById("distance").value);

    if (isNaN(q1) || isNaN(q2) || isNaN(r)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    if (r <= 0) {
        alert("Distance must be greater than zero.");
        return;
    }

    const force = (k * q1 * q2) / (r * r);
    document.getElementById("result").innerText = force.toExponential(3) + " N";
}
