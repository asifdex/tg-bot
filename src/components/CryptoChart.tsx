import { Chart, registerables } from 'chart.js';

// import React, { useEffect, useRef } from 'react';

// Chart.register(...registerables);

// const CryptoChart = ({ priceHistory }: { priceHistory: [number, number][] }) => {
//   const chartRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');
//       if (ctx) {
//         new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: priceHistory.map(([timestamp]) => new Date(timestamp).toLocaleDateString()),
//             datasets: [
//               {
//                 label: 'Price (USD)',
//                 data: priceHistory.map(([, price]) => price),
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 fill: true,
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               y: {
//                 beginAtZero: false,
//               },
//             },
//           },
//         });
//       }
//     }
//   }, [priceHistory]);

//   return <canvas ref={chartRef} />;
// };

// export default CryptoChart;
