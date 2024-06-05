const functions = require("firebase-functions");
const {Telegraf} = require("telegraf");

const bot = new Telegraf(functions.config().telegram.token);

bot.catch((err, ctx) => {
  functions.logger.error("[Bot] Error", err);
  return ctx.reply(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

// eslint-disable-next-line max-len
bot.command("/start", (ctx) => ctx.reply("Hello! Send any message and I will provide a link to my app."));

// eslint-disable-next-line max-len
bot.on("message", (ctx) => ctx.reply("Check out my app at t.me/yarik58_bot/tap"));


exports.echoBot = functions.https.onRequest(async (request, response) => {
  functions.logger.log("Incoming message", request.body);
  try {
    await bot.handleUpdate(request.body, response);
    if (!response.headersSent) {
      response.sendStatus(200);
    }
  } catch (error) {
    functions.logger.error("Error handling update", error);
    response.sendStatus(500);
  }
});
