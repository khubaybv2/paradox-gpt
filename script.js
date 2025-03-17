document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.querySelector(".chat-body");
    const chatInput = document.querySelector(".chat-footer input");
    const chatButton = document.querySelector(".chat-footer button");

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "You" ? "user-message" : "bot-message");
        messageDiv.textContent = `${sender}: ${message}`;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    async function fetchNLPResponse(userInput) {
        const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(userInput)}&format=json`);
        const data = await response.json();
        return data.AbstractText || "I'm not sure, but I can learn!";
    }

    chatButton.addEventListener("click", async function () {
        const userInput = chatInput.value.trim();
        if (userInput) {
            appendMessage("You", userInput);
            chatInput.value = "";

            const botResponse = await fetchNLPResponse(userInput);
            appendMessage("Chatbot", botResponse);
        }
    });

    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            chatButton.click();
        }
    });
});
