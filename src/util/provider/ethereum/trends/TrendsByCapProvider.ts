import { TopCollectionsByCap } from "../../types";
import Provider from "../../Provider";
import { AxiosError } from "axios";
import hash from "object-hash";

class TrendsByCapProvider extends Provider<TopCollectionsByCap> {
    
    constructor() {
        const url = "https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections";

        super(url, 86400000);
    }

    async get(): Promise<TopCollectionsByCap> {
        const headers = {
            "accept": "application/json",
            "X-API-Key": `${process.env.REACT_APP_MORALIS_API_KEY}`
        };

        return this.axios.get(this.url, { headers }).then((response) => {
            return new Promise<TopCollectionsByCap>((resolve) => {
                const data = response.data as TopCollectionsByCap;
                resolve(data);
            });
        });
    }

    getHashForCashing(): string {
        return hash(this.url);
    }

    onError(error: Error | AxiosError): Error {
        console.error("Unable to fetch top collections by cap: ", error);
        return new Error("Unable to fetch top collections by cap", error);
    }
}

export default TrendsByCapProvider;