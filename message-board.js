// 加载留言板
function loadMessages() {
    const board = document.getElementById("message-board");
    board.innerHTML = ""; // 清空现有内容
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    // 🔀 随机排序留言（不按时间排序）
    messages = messages.sort(() => Math.random() - 0.5);

    messages.forEach((msg, index) => {
        let messageElement = document.createElement("div");
        messageElement.classList.add("message");

        messageElement.innerHTML = `
            <p><strong>Anonymous:</strong> ${msg.text}</p>
            <small>${msg.time}</small>
            <button onclick="replyMessage(${index})">Reply</button>
            <button onclick="likeMessage(${index})">👍 Like <span id="like-count-${index}">${msg.likes || 0}</span></button>
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
        replies: [],
        likes: 0 // 👈 初始化点赞数为 0
    });

    localStorage.setItem("messages", JSON.stringify(messages));
    input.value = "";
    loadMessages();
}

// 点赞留言
function likeMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages[index].likes = (messages[index].likes || 0) + 1; // 点赞 +1
    localStorage.setItem("messages", JSON.stringify(messages));
    document.getElementById(`like-count-${index}`).innerText = messages[index].likes; // 更新 UI
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
