// import axios from "axios";

// const getCryptoPriceHistory = async (symbol: string): Promise<any> => {
//   const url = `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=1`;
//   try {
//     const response = await axios.get(url);
//     const prices = response.data.prices.map((price: [number, number]) => ({
//       timestamp: price[0], // UNIX timestamp
//       price: price[1], // Price in USD
//     }));
//     return prices;
//   } catch (error) {
//     console.error("Error fetching data from CoinMarketCap:", error);
//     return [];
//   }
// };
// export default getCryptoPriceHistory;
