This is a beginner-friendly Telegram bot built using Node.js and the Telegraf library.
It responds to basic commands and messages like /start, /about, etc.



 Features
/start – Welcomes the user
/about – Tells about the bot


Prerequisites
Node.js installed on your computer
A Telegram bot token (created using @BotFather)


Getting Started
Install required packages: 
Here we have used telegraf library so to use it in our code we need to run npm i telegraf to download all the 
dependencies such as package-lock.json and package.json

Get the bot token:
From botFather (official bot by telegram) the role of this token: 
This token is a secret key. It is like the remote control for our bot. We need it in your code to tell Telegram:
“This is my bot. Let me control it.”



Run the bot: node index.js


How to Use the Bot
Open Telegram and search for your bot
Start the bot by sending /start
Try sending /about


File Structure
Telegram-Bot/
├── index.js        # Bot logic
├── package.json    # Dependencies
└── README.md       # This file
