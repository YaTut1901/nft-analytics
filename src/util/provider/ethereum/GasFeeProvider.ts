import Provider from "../Provider";
import Web3 from "web3";
import { GasFeeError } from "../types";

class GasFeeProvider extends Provider<number, GasFeeError> {
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
        return "GasFee";
    }

    shouldRetry(error: GasFeeError): boolean {
        return true;
    }

    onError(error: GasFeeError): Error {
        console.error(`Gas fee API error: ${error.message}`);
        return new Error(`Gas fee API error: ${error.message}`);
    }
}

export default GasFeeProvider;