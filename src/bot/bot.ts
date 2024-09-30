// export interface PriceData {
//     timestamp: number; // UNIX timestamp
//     price: number; // Price in USD
// }
import { Telegraf } from "telegraf";
// import dotenv from "dotenv";
// import { getCryptoPrice } from "../services/priceChart";
// import getCryptoPriceHistory from "../services/PriceHistory";
// import createChart from "../services/generatePriceChart";

// dotenv.config();

const token = process.env.TG_API || "";
const bot = new Telegraf(token);

// bot.command("price", async (ctx) => {
//     const message = ctx.message.text;
//     const symbol = message.split(" ")[1];
//     console.log("sybolss......................................",symbol);
    
    
    
//     try {
//         const cryptoData = await getCryptoPrice(symbol);
//         if(!cryptoData) {console.log("typw some"); return}
        
//         const cryptoSlug =cryptoData.slug;
      
//         const priceHistory = await getCryptoPriceHistory(cryptoSlug);
//         // console.log(".................",priceHistory);
        
//         if (!priceHistory.length) {
//             return ctx.reply(`Could not retrieve historical data for ${symbol}`);
//         }

//         // Generate the chart image
//         const chartImage = await createChart(priceHistory);

//         // Send the chart image to the user
//         await ctx.replyWithPhoto({ source: chartImage });

//         // Reply with current price information (you may want to fetch this separately)
//         const replyMessage = `
//           🔍 *${cryptoData.name} (${cryptoData.symbol})*
//           Price: $${cryptoData.price.toFixed(4)}
//         `;
//         ctx.replyWithMarkdown(replyMessage);
//     } catch (error) {
//         console.error("Error in /price command:", error); // Log the error for debugging
//         ctx.reply("Sorry, I couldn't retrieve data for that symbol. Please try again.");
//     }
// });


export default bot;
