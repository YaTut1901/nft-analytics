import Provider from "../Provider";
import { Rates, TokenPriceError } from "../types";
import { AxiosError } from "axios";
import hash from "object-hash"

class TokenPriceProvider extends Provider<Rates>{
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
        return hash(this.url);
    }

    onError(error: Error | AxiosError): Error {
        if (error instanceof AxiosError) {
            const data = error.response?.data;
            if ("Message" in data) {
                const tokenPriceError = data as TokenPriceError;
                return new Error(`Token price error: ${tokenPriceError.Message}`);
            };
        };

        return error;
    }
}

export default TokenPriceProvider;