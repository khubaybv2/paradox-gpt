ParadoxGPT
ParadoxGPT is an open-source AI chatbot built with JavaScript and various free APIs (DuckDuckGo, Wikipedia, and Google Sheets). It supports both English and Bengali languages and can easily be deployed to platforms like Netlify and Render. This project is licensed under the MIT License, meaning you can use, modify, and distribute it freely!

Features
Bilingual Support: Supports both English and Bengali for a wide range of users.
Customizable Knowledge Base: Uses a custom dataset loaded from a Google Sheet to answer user queries.
Fallback APIs: If no match is found, it uses DuckDuckGo API and Wikipedia API for general information.
Responsive UI: A clean, simple, and responsive chat interface suitable for all devices.
Easy Deployment: Deploy it effortlessly to Netlify or Render.
Live Demo
Try out the live demo of ParadoxGPT here:
ParadoxGPT Live Demo

Features Breakdown
User Input Handling: Users can type questions in either English or Bengali, and the chatbot will intelligently respond based on the language detected.
Dynamic Responses: Uses a combination of local knowledge (Google Sheets) and APIs to deliver answers in real-time.
Knowledge Base: The chatbot’s knowledge base can be extended by simply updating the linked Google Sheet.
Fallback: If the chatbot can't find an answer in the knowledge base, it will search for answers from Wikipedia or DuckDuckGo.
MIT License: Fully open-source and free for modification.
Installation and Deployment
1. Clone the Repository
First, clone this repository to your local machine:

bash
Copy
Edit
git clone https://github.com/khubaybv2/paradox-gpt.git
2. Deploy to Netlify
Go to Netlify and sign up if you don’t have an account.
After signing in, click on New Site from Git.
Connect to your GitHub account and select the ParadoxGPT repository.
Follow the prompts to deploy, and your chatbot will be live on Netlify!
3. Deploy to Render
Go to Render and sign up.
Click on New Web Service.
Connect to your GitHub repository and follow the prompts.
Choose Static Site as the service type, and select the branch you want to deploy.
After completing the setup, Render will deploy your chatbot!
4. Update Knowledge Base
Open the Google Sheets linked in the script (the one in the loadKnowledgeBase function).
Edit the sheet to add or modify questions and answers in both English and Bengali.
5. Configure Environment
If you are deploying to your own platform or making advanced customizations:

Update the knowledge base URL in the loadKnowledgeBase() function if you're using a different Google Sheets link.
Ensure that the DuckDuckGo and Wikipedia APIs are accessible by the chatbot.
Technologies Used
HTML/CSS/JS: Frontend development
DuckDuckGo API: Search queries for general knowledge
Wikipedia API: For retrieving data from Wikipedia
Google Sheets API: For the chatbot’s custom knowledge base
Netlify/Render: Hosting and deployment
License
This project is licensed under the MIT License. You can freely modify, use, and distribute this project. However, if you plan to use it for commercial purposes, please make sure you are compliant with the relevant laws and regulations.

Credits
Khubayb Hossain - Creator of ParadoxGPT
Powered by free APIs and hosted on platforms like Netlify and Render.
