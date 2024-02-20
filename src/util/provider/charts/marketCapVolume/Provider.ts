import { ChartOptions, ChartData } from "chart.js";
import { Currency, Period } from "./supportedValues";
import axios from "axios";

const nftgoApiKey: string | undefined = process.env.REACT_APP_NFTGO_API_KEY;

export async function getData(currency: Currency,
                              period: Period,  
                              test: boolean = false): Promise<ChartData<"line">> {
    const rawData: RawData = test ? getTestRawData() : await getRawData(currency, period);

    return {
        labels: formatLabels(rawData.timestamp, period),
        datasets: [
            {
                label: "Cap",
                backgroundColor: "rgba(94,143,231,0.8)",
                fill: true,
                yAxisID: 'y',
                xAxisID: 'x',
                pointRadius: 0,
                data: rawData.cap.map(e => Math.round(e)),
            },
            {
                label: "Volume",
                fill: true,
                yAxisID: 'y1',
                xAxisID: 'x',
                backgroundColor: "rgba(255,99,132,0.8)",
                pointRadius: 0,
                data: rawData.volume.map(e => Math.round(e)),
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

// format labels for the x-axis depends on the period selected. If that is Day then it will show only time in 24 format, without date, if it is Week then it will show the date and time, and if it is Month then it will show the date.
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

type RawData = {
    timestamp: number[];
    cap: number[];
    volume: number[];
}

function getTestRawData(): RawData {
    return ({
        timestamp: [1706745600, 1706832000, 1706918400, 1707004800, 1707091200, 1707177600, 1707264000, 1707350400, 1707436800, 1707523200, 1707609600, 1707696000, 1707782400, 1707868800, 1707955200, 1708041600, 1708128000],
        cap: [8393851172.430474, 8416639936.675723, 8327610847.611737, 8335906146.458281, 8421561925.559252, 8468416391.026939, 8648312690.855017, 8919172879.899757, 8978735000.835527, 9000772940.347668, 9459749133.8221, 9330762737.984562, 9509035554.01804, 9744531389.867197, 9911089139.162739, 9782499330.898596, 9953122439.526794],
        volume: [21303671.7263078, 14839403.922606444, 13776517.367978053, 23300527.84174075, 21941056.478879232, 20064923.42776264, 24192667.36795632, 22848117.376788434, 17845879.549356997, 19153975.777030926, 25688352.587745667, 19126043.0435533, 24673009.756767605, 25334375.172166493, 25302175.07130353, 30912910.21207415, 39166592.942801856]
    })
};

type ResponseData = {
    x: number[];
    y: number[];
}

async function getRawData(currency: Currency,
                          period: Period): Promise<RawData> {
    const start = new Date();
    start.setDate(start.getDate() - period.offset);
    const end = new Date();

    const urlCap = `https://data-api.nftgo.io/eth/v1/market/chart/marketcap?start_time=${start.toISOString()}&end_time=${end.toISOString()}&unit=${currency.ticker}`;
    const urlVolume = urlCap.replace("marketcap", "volume");

    const headers = {
        "X-API-KEY": `${nftgoApiKey}`,
        "accept": "application/json",
    };

    try {
        const [responseCap, responseVolume] = await Promise.all([
            axios.get(urlCap, { headers }),
            axios.get(urlVolume, { headers }),
        ]);

        const dataCap = responseCap.data as ResponseData;
        const dataVolume = responseVolume.data as ResponseData;

        const result: RawData = {
            timestamp: dataCap.x,
            cap: dataCap.y,
            volume: dataVolume.y,
        };

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
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
