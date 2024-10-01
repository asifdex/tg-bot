// import axios from "axios";
// import { PriceData } from "../config";
// // Define the PriceData interface

// // Fetch the crypto price history using CoinGecko
// export const getCryptoPriceHistory = async (symbol: string): Promise<PriceData[]> => {
//   const url = `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=7`;

//   try {
//     const response = await axios.get(url);
//     const prices = response.data.prices.map((price: [number, number]) => ({
//       timestamp: price[0] / 1000, // Convert timestamp from milliseconds to seconds
//       price: price[1], // Price in USD
//     }));
//     return prices;
//   } catch (error) {
//     console.error("Error fetching data from CoinGecko:", error);
//     return [];
//   }
// };
