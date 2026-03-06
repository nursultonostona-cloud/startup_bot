# Startupizni Telegram Bot - Deployment Guide

Professional Telegram bot for entrepreneurs, converted from the Tadbirkor-Yo'li ecosystem.

## Features
- 🚀 **Category Based Logic**: Livestock, Textile, Agriculture, Food.
- 📚 **Business Education**: Access to mini-courses.
- 🤝 **Supplier Database**: Verified contacts in Uzbekistan.
- 🤖 **Marketing AI**: Automated ad-text generation.
- 📊 **Dashboard**: Business stats preview.

## How to Run Locally
1. Clone the project.
2. Install dependencies: `npm install`
3. Create a `.env` file and add your token: `BOT_TOKEN=your_token_here`
4. Run the bot: `node index.js`

## Deployment (Free Hosting)
You can deploy this bot for free on **Render** or **Railway**.

### Render Deployment Steps:
1. Push your code to a GitHub repository.
2. Create a new **Web Service** on [Render](https://render.com).
3. Connect your GitHub repository.
4. Set **Environment Variables**:
   - `BOT_TOKEN`: Your Telegram Bot Token.
5. Set **Start Command**: `node index.js`
6. Deploy! Render will give you a URL, and the bot will stay alive.

### Railway Deployment Steps:
1. Connect your GitHub repo to [Railway](https://railway.app).
2. Add your `BOT_TOKEN` in the **Variables** tab.
3. Railway will automatically detect the `package.json` and start the bot.
