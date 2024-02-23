import Provider from "../Provider";
import { Rates, TokenPriceError } from "../types";

class TokenPriceProvider extends Provider<Rates, TokenPriceError>{
    constructor(from: string, to: string | string[]) {
        super(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to.concat(',')}`, 300000);
    }

    async get(): Promise<Rates> {
        return this.axios.get(this.url).then((response) => {
            const rates: Rates = response.data as Rates;
            Object.keys(rates).forEach((key) => {
                rates[key] = Math.round(rates[key]);
            });
            return rates;
        });
    }

    getHashForCashing(): string {
        return this.url;
    }

    shouldRetry(error: TokenPriceError): boolean {
        return true;
    }

    onError(error: any): Error {
        console.error(`Token price API error: ${error.response.status}, ${error.response.statusText}`);
        return new Error(`Token price API error: ${error.response.status}, ${error.response.statusText}`);
    }
}

export default TokenPriceProvider;