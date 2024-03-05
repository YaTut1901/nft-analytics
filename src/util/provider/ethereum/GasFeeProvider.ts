import Provider from "../Provider";
import Web3 from "web3";
import { GasFeeError } from "../types";
import { AxiosError } from "axios";
import hash from "object-hash";

class GasFeeProvider extends Provider<number> {
    private web3: Web3;

    constructor() {
        super(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`, 60000);
        this.web3 = new Web3(this.url);
    }

    async get(): Promise<number> {
        return this.web3.eth.getGasPrice().then((price) => {
            return parseInt(this.web3.utils.fromWei(price, 'gwei'));
        });
    }

    getHashForCashing(): string {
        return hash("GasFee");
    }

    onError(error: Error | AxiosError): Error {
        if (error instanceof AxiosError) {
            const data = error.response?.data;
            if ("message" in data) {
                const gasFeeError = data as GasFeeError;
                return new Error(`Gas fee error: ${gasFeeError.message}`);
            };
        };

        return error;
    }
}

export default GasFeeProvider;