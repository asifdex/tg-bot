export const formatNumber = (num: number): string => {
    if (num < 1000) return num.toString();
    if (num < 1_000_000) return (num / 1000).toFixed(1) + 'k'; // e.g. 6400 -> 6.4k
    if (num < 1_000_000_000) return (num / 1_000_000).toFixed(1) + 'M'; // e.g. 6400000 -> 6.4M
    return (num / 1_000_000_000).toFixed(1) + 'B'; // e.g. 6400000000 -> 6.4B
};