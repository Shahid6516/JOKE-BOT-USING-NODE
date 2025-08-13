const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const { default: axios, options } = require("axios");
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
// bot.on('message', (option)=>{
// console.log("message recieved on the bot", option)

// bot.sendMessage(option.chat.id, "Hello i am a bot. i am here to help you with your queries. please type /help to know more about it")
// });

bot.onText(/\/joke/, async (option) => {
  const responce = await axios.get(
    "http://www.official-joke-api.appspot.com/random_joke"
  );
  console.log(responce);
  const setup = responce.data.setup;
  const punchline = responce.data.punchline;
  bot.sendMessage(option.chat.id, setup + " , " + punchline);
});
