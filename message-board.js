// 加载留言板
function loadMessages() {
    const board = document.getElementById("message-board");
    board.innerHTML = ""; // 清空现有内容
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.forEach((msg, index) => {
        let messageElement = document.createElement("div");
        messageElement.classList.add("message");

        messageElement.innerHTML = `
            <p><strong>Anonymous:</strong> ${msg.text}</p>
            <small>${msg.time}</small>
            <button onclick="replyMessage(${index})">Reply</button>
            <div id="replies-${index}" class="replies">
                ${msg.replies.map(reply => `<p>↳ ${reply}</p>`).join("")}
            </div>
        `;
        board.appendChild(messageElement);
    });
}

// 发布留言
function postMessage() {
    let input = document.getElementById("message-input");
    let text = input.value.trim();
    if (text === "") return alert("Message cannot be empty!");

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({
        text: text,
        time: new Date().toLocaleString(),
        replies: []
    });

    localStorage.setItem("messages", JSON.stringify(messages));
    input.value = "";
    loadMessages();
}

// 回复留言
function replyMessage(index) {
    let replyText = prompt("Enter your reply:");
    if (!replyText) return;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages[index].replies.push(replyText);
    localStorage.setItem("messages", JSON.stringify(messages));
    loadMessages();
}

// 加载页面时显示留言
window.onload = loadMessages;
