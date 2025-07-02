// Пример сообщений
const messages = [
    { author: "User123", text: "Ищу партнёра по CS2!" },
    { author: "GamerPro", text: "Я свободен, давайте сыграем!" },
    { author: "MinecraftFan", text: "Кто играет в Minecraft? Приглашаю в сервер!" },
    { author: "ValorantLover", text: "Ищу дуо для ранкеда!" },
    { author: "AmongUsPlayer", text: "Друзья, кто онлайн? Сыграем в Among Us?" }
];

// Функция для отображения сообщений
function renderMessages() {
    const chatBox = document.getElementById("custom-chat-box");
    chatBox.innerHTML = ""; // Очистить старые

    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";

        messageDiv.innerHTML = `
            <div class="author">${msg.author}</div>
            <div class="text">${msg.text}</div>
        `;

        chatBox.appendChild(messageDiv);
    });
}

// Запустить при загрузке
window.onload = renderMessages;
