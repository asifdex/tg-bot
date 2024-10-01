// import { Telegraf } from "telegraf";
// import dotenv from "dotenv";
// import { getCryptoPrice } from "../services/getPrice";
// import { getCryptoPriceHistory } from "../services/PriceHistory";
// import { createChart } from "../services/generatePriceChart";
// import { formatNumber } from "../../utils";

// dotenv.config();

// const token = process.env.TG_API || "";
// const bot = new Telegraf(token);

// bot.command("p", async (ctx) => {
//   const message = ctx.message.text;
//   const symbol = message.split(" ")[1];
//   console.log("symbol:", symbol);

//   try {
//     const cryptoData = await getCryptoPrice(symbol);
//     if (!cryptoData) {
//       console.log("Invalid symbol or no data found.");
//       return ctx.reply("Please provide a valid cryptocurrency symbol.");
//     }

//     const cryptoSlug = cryptoData.slug;
//     const priceHistory = await getCryptoPriceHistory(cryptoSlug);

//     if (!priceHistory.length) {
//       return ctx.reply(`Could not retrieve historical data for ${symbol}`);
//     }

//     // Generate the chart image
//     const chartImage = await createChart(priceHistory);

//     // Prepare the reply message
//     const res = `<a style="color:red" href="https://currentmillis.com/"> yo bro</a>`;

//     const replyMessage = `
//         *${cryptoData.name} (${cryptoData.symbol})*
// *Price:* $${formatNumber(cryptoData.price)} 
// *24h Vol:* $${formatNumber(cryptoData.volume24h)}
// *Market Cap:* $${formatNumber(cryptoData.marketCap)}
// replymsg : ${res}
       
//     `;

//     // Send the chart image to the user first
//     await ctx.replyWithPhoto(
//       { source: chartImage },
//       { caption: replyMessage, parse_mode: "HTML" }
//     );


//   } catch (error) {
//     ctx.reply(
//       `Sorry, I couldn't retrieve data for that ${symbol}. Please try again.`
//     );
//   }
// });


// bot.on("new_chat_members", async (ctx) => {
//     const newMembers = ctx.message.new_chat_members;
  
//     newMembers.forEach(async (member) => {
//       const name = member.first_name || "there"; // Use first name or a default greeting
//       const welcomeMessage = `
//         👋 Welcome ${name} to our group!
//         We hope you enjoy your time here. If you have any questions, feel free to ask.
//         Please read the rules and stay respectful!
//       `;
  
//       // Send the welcome message to the group
//       await ctx.reply(welcomeMessage);
//     });
//   });
  
// export default bot;
