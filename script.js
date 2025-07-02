// Массив сообщений
let messages = [];

// Отправка сообщения
function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (text === "") return;

    const message = {
        author: "Гость",
        text: text,
        time: new Date().toLocaleTimeString()
    };

    messages.push(message);
    input.value = "";
    renderMessages();
}

// Отображение сообщений
function renderMessages() {
    const chatBox = document.getElementById("messageBox");
    chatBox.innerHTML = "";

    messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `<strong>${msg.author}</strong> (${msg.time}):<br>${msg.text}`;
        chatBox.appendChild(div);
    });

    // Прокрутка вниз
    chatBox.scrollTop = chatBox.scrollHeight;
}
