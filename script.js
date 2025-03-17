// Updated script.js for chatbot with Google Sheets, DuckDuckGo API & TensorFlow.js NLP

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        const chatbox = document.getElementById("chatbox");
        const userInput = document.getElementById("userInput");
        const sendButton = document.getElementById("sendButton");
        
        // Google Sheets API URL (Replace with your sheet's API URL)
        const SHEET_API_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSO.../pub?output=csv";
        
        // Function to fetch Google Sheets data
        async function fetchGoogleSheet(query) {
            try {
                let response = await fetch(SHEET_API_URL);
                let data = await response.text();
                let rows = data.split("\n").map(row => row.split(","));
                
                for (let row of rows) {
                    if (row[0].toLowerCase() === query.toLowerCase()) {
                        return row[1]; // Returning matched answer
                    }
                }
            } catch (error) {
                console.error("Error fetching Google Sheet:", error);
            }
            return null; // If no match found
        }
        
        // Function to fetch DuckDuckGo API
        async function fetchDuckDuckGo(query) {
            try {
                let response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1`);
                let data = await response.json();
                return data.Abstract || "I couldn't find an answer.";
            } catch (error) {
                console.error("DuckDuckGo API error:", error);
                return "I couldn't retrieve data right now.";
            }
        }
        
        // TensorFlow.js NLP Model for Intent Detection
        async function loadTensorFlowModel() {
            const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json');
            return model;
        }
        
        async function processUserMessage(query) {
            // First Priority: Google Sheets Query Matching
            let answer = await fetchGoogleSheet(query);
            if (answer) return answer;
            
            // Fallback to DuckDuckGo API
            return await fetchDuckDuckGo(query);
        }
        
        sendButton.addEventListener("click", async () => {
            let userMessage = userInput.value.trim();
            if (!userMessage) return;
            
            chatbox.innerHTML += `<p>You: ${userMessage}</p>`;
            userInput.value = "";
            
            let botResponse = await processUserMessage(userMessage);
            chatbox.innerHTML += `<p>Bot: ${botResponse}</p>`;
        });
    });
}
