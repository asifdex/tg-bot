// interface PriceData {
//   timestamp: number;
//   price: number;
// }
// import { ChartConfiguration, Chart } from "chart.js";
// import { ChartJSNodeCanvas } from "chartjs-node-canvas";const createChart = async (priceHistory: PriceData[]) => {
//   const labels = priceHistory.map(data =>
//     new Date(data.timestamp * 1000).toLocaleTimeString() // Convert UNIX timestamp to local time
//   );
//   const prices = priceHistory.map(data => data.price);

//   const chartJSNodeCanvas = new ChartJSNodeCanvas({
//     width: 800,
//     height: 400,
//   });

//   const configuration: ChartConfiguration<'line', number[], string> = {
//     type: "line",
//     data: {
//       labels,
//       datasets: [
//         {
//           label: "Price in USD",
//           data: prices,
//           borderColor: "rgba(75, 192, 192, 1)",
//           fill: false,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           display: true,
//         },
//         tooltip: {
//           callbacks: {
//             label: (tooltipItem) => {
//               // Use a type assertion to tell TypeScript that tooltipItem.raw is a number
//               const price = tooltipItem.raw as number; 
//               return `$${price.toFixed(2)}`; // Adjust tooltip to display price correctly
//             },
//           },
//         },
//       },
//     },
    
    
//   };

//   const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
//   return imageBuffer;
// };

// export default createChart;