const functions = require("firebase-functions");
const {Telegraf} = require("telegraf");

const admin = require("firebase-admin");
admin.initializeApp();

const TELEGRAM_TOKEN = functions.config().telegram.token;

const bot = new Telegraf(TELEGRAM_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("t.me/yarik58_bot/tap");
});

exports.telegramWebhook = functions.https.onRequest(async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
