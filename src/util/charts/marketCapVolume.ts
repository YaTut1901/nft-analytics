import { ChartData, ChartOptions } from 'chart.js';
import { Currency, Period } from '../provider/types';

export function getData(timestamp: number[],
    period: Period,
    cap: number[],
    volume: number[]): ChartData<"line"> {
    return {
        labels: formatLabels(timestamp, period),
        datasets: [
            {
                label: "Cap",
                backgroundColor: "rgba(94,143,231,0.8)",
                fill: true,
                yAxisID: 'y',
                xAxisID: 'x',
                pointRadius: 0,
                data: cap.map(e => Math.round(e)),
            },
            {
                label: "Volume",
                fill: true,
                yAxisID: 'y1',
                xAxisID: 'x',
                backgroundColor: "rgba(255,99,132,0.7)",
                pointRadius: 0,
                data: volume.map(e => Math.round(e)),
            },
        ],
    }
};

export function getEmptyData(period: Period): ChartData<"line"> {
    return {
        labels: period.labels,
        datasets: [
            {
                label: "Cap",
                backgroundColor: "rgba(94,143,231,0.8)",
                fill: true,
                yAxisID: 'y',
                xAxisID: 'x',
                pointRadius: 0,
                data: [],
            },
            {
                label: "Volume",
                fill: true,
                yAxisID: 'y1',
                xAxisID: 'x',
                backgroundColor: "rgba(255,99,132,0.8)",
                pointRadius: 0,
                data: [],
            },
        ],
    }
}

export function getOptions(currency: Currency,
    period: Period): ChartOptions<'line'> {
    return ({
        responsive: true,
        plugins: {
            tooltip: {
                mode: 'point',
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += formatTicks(context.parsed.y);
                        }
                        return label + " " + currency.sign;
                    }
                }
            }
        },
        animation: {
            duration: 2000
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: period.mark !== "7D",
            },
            y: {
                ticks: {
                    callback: function (value) {
                        return formatTicks(value);
                    }
                },
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                ticks: {
                    callback: function (value) {
                        return formatTicks(value);
                    }
                },
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        }
    })
}

function formatTicks(value: number | string): string {
    if (typeof value === "string") {
        return value;
    }
    if (value < 1000) {
        return value.toString();
    }

    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;
    while (value >= 1000) {
        value /= 1000;
        suffixIndex++;
    }

    return value.toFixed(1) + suffixes[suffixIndex];
}

function formatLabels(timestamps: number[], period: Period): string[] {
    switch (period.mark) {
        case "24H":
            return timestamps.map((timestamp) => {
                const date = new Date(timestamp * 1000);
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            });
        case "7D":
            return timestamps.map((timestamp) => {
                const date = new Date(timestamp * 1000);
                return date.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            });
        case "30D":
            return timestamps.map((timestamp) => {
                const date = new Date(timestamp * 1000);
                return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
            });
        default:
            return [];
    }
}