const functions = require("firebase-functions");
const {Telegraf} = require("telegraf");


const admin = require("firebase-admin");
admin.initializeApp();


const TELEGRAM_TOKEN = functions.config().telegram.token;

// Инициализация Telegraf с токеном
const bot = new Telegraf(TELEGRAM_TOKEN);

bot.start((ctx) => {
  ctx.reply("t.me/yarik58_bot/tap");
});


exports.telegramWebhook = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
});
