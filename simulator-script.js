const canvas = document.getElementById("simulationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

// 库仑常数
const k = 8.99e9;

// 定义电荷类
class Charge {
    constructor(x, y, charge, color) {
        this.x = x;
        this.y = y;
        this.charge = charge;
        this.radius = 20;
        this.color = color;
        this.dragging = false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.fillText(this.charge + "C", this.x - 12, this.y + 5);
    }

    isInside(mx, my) {
        return Math.sqrt((mx - this.x) ** 2 + (my - this.y) ** 2) < this.radius;
    }
}

// 创建两个电荷
let charge1 = new Charge(200, 200, 1, "red");
let charge2 = new Charge(400, 200, -1, "blue");
let selectedCharge = null;

// 监听鼠标拖动
canvas.addEventListener("mousedown", (event) => {
    let rect = canvas.getBoundingClientRect();
    let mx = event.clientX - rect.left;
    let my = event.clientY - rect.top;

    if (charge1.isInside(mx, my)) selectedCharge = charge1;
    else if (charge2.isInside(mx, my)) selectedCharge = charge2;
});

canvas.addEventListener("mousemove", (event) => {
    if (!selectedCharge) return;
    let rect = canvas.getBoundingClientRect();
    selectedCharge.x = event.clientX - rect.left;
    selectedCharge.y = event.clientY - rect.top;
    updateSimulation();
});

canvas.addEventListener("mouseup", () => {
    selectedCharge = null;
});

// 计算库仑力
function calculateForce() {
    let dx = charge2.x - charge1.x;
    let dy = charge2.y - charge1.y;
    let r = Math.sqrt(dx * dx + dy * dy);
    if (r < 20) r = 20; // 防止除以零问题

    let q1 = parseFloat(document.getElementById("charge1").value);
    let q2 = parseFloat(document.getElementById("charge2").value);
    let force = (k * q1 * q2) / (r * r);
    
    return { force, dx, dy, r };
}

// 更新画布
function updateSimulation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    charge1.draw();
    charge2.draw();
}

// 监听输入变化
document.getElementById("charge1").addEventListener("input", updateSimulation);
document.getElementById("charge2").addEventListener("input", updateSimulation);

// 初始绘制
updateSimulation();
