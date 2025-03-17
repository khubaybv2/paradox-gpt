if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
        const chatbox = document.getElementById("chatbox");
        const sendButton = document.getElementById("send");
        const chatContainer = document.getElementById("chat-container");

        sendButton.addEventListener("click", function () {
            handleUserInput();
        });

        chatbox.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                handleUserInput();
            }
        });

        function handleUserInput() {
            const userInput = chatbox.value.trim();
            if (userInput) {
                displayMessage("You", userInput);
                chatbox.value = "";
                setTimeout(() => generateResponse(userInput), 500);
            }
        }

        function displayMessage(sender, message) {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", sender === "You" ? "user" : "bot");
            messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function generateResponse(input) {
            const lowerInput = input.toLowerCase();
            let response = "I'm still learning! 😊";

            // Basic NLP-like response handling
            if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
                response = "Hello! How can I assist you today? 😊";
            } else if (lowerInput.includes("how are you")) {
                response = "I'm just a chatbot, but I'm doing great! Thanks for asking. How about you?";
            } else if (lowerInput.includes("bye")) {
                response = "Goodbye! Have a great day! 😊";
            } else if (lowerInput.includes("your name")) {
                response = "I'm ParadoxGPT, your chatbot assistant! 🚀";
            } else if (lowerInput.includes("who created you")) {
                response = "I was created by Khubayb Hossain under the MIT License. Check out more at www.khubaybhossain.com!";
            }

            displayMessage("ParadoxGPT", response);
        }
    });
}
