// Сообщения чата
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

// Поиск напарника
document.getElementById("findGameForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("matchFound").classList.remove("hidden");
});

// Открыть игру
function openGame(game) {
    alert("Вы выбрали: " + game);
    // Здесь можно перенаправить на iframe или свою реализацию
}

// Начать игру
function startGame() {
    alert("Игра началась!");
}
