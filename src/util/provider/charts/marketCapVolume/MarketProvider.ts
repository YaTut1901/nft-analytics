import Provider from "../../Provider";
import { MarketError, RawMarketData } from "../../types";
import { Period, Currency, CapVolumeResponse } from "../../types";
import hash from "object-hash";

class MarketProvider extends Provider<RawMarketData, MarketError> {
    private period: Period;
    private currency: Currency;

    constructor(period: Period, currency: Currency, type: string) {
        const start = new Date();
        start.setDate(start.getDate() - period.offset);
        const end = new Date();
        
        super(`https://data-api.nftgo.io/eth/v1/market/chart/${type}?start_time=${start.toISOString()}&end_time=${end.toISOString()}&unit=${currency.ticker}`);
        this.period = period;
        this.currency = currency;
    }

    async get(): Promise<RawMarketData> {
        const headers = {
            "X-API-KEY": `${process.env.REACT_APP_NFTGO_API_KEY}`,
            "accept": "application/json",
        };

        return this.axios.get(this.url, { headers }).then((response) => {
            return new Promise<RawMarketData>((resolve) => {
                const data = response.data as CapVolumeResponse;
                const result: RawMarketData = {
                    timestamp: data.x,
                    data: data.y,
                };
                resolve(result);
            });
        });
    }

    getHashForCashing(): string {
        return hash({ url: this.url.split("?")[0], period: this.period, currency: this.currency });
    }

    shouldRetry(error: MarketError): boolean {
        return error.code === 422;
    }

    onError(error: MarketError): Error {
        console.error(`Market API error: ${error.code}, ${error.detail[0].msg}`);
        return new Error(`Market API error: ${error.code}, ${error.detail[0].msg}`);
    }
}

export default MarketProvider;