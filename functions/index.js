const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

const TELEGRAM_TOKEN = functions.config().telegram.token;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

exports.telegramWebhook = functions.https.onRequest(async (req, res) => {
  console.log("Request received:", req.body);

  if (req.body.message && req.body.message.text === "/start") {
    const chatId = req.body.message.chat.id;
    const message = "t.me/yarik58_bot/tap";
    console.log(`Sending message to chat ID: ${chatId}`);

    try {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      console.log("Message sent successfully");
      res.status(200).send("Message sent");
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).send("Error sending message");
    }
  } else {
    console.log("No action taken");
    res.status(200).send("No action taken");
  }
});

