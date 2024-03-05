import Provider from "../../Provider";
import { MarketError, RawMarketData } from "../../types";
import { Period, Currency, CapVolumeResponse } from "../../types";
import hash from "object-hash";
import { AxiosError } from "axios";

class MarketProvider extends Provider<RawMarketData> {
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

    onError(error: Error | AxiosError): Error {
        if (error instanceof AxiosError) {
            const data = error.response?.data;
            if ("code" in data && "detail" in data) {
                const marketError = data as MarketError;
                console.error(`Market API error: ${marketError.code}, ${marketError.detail[0].msg}`);
                return new Error(`Market API error: ${marketError.code}, ${marketError.detail[0].msg}`);
            };
        };

        return error;
    }
}

export default MarketProvider;