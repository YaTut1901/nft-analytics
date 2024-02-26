import Provider from "../Provider";
import { News, NewsApiError } from "../types";
import hash from "object-hash";

class NewsProvider extends Provider<News[], NewsApiError> {
    constructor() {
        const url: string = 'https://newsapi.org/v2/everything?' +
            `pageSize=20&` +
            `q=crypto&` +
            `from=${new Date(Date.now() - 86400000).toISOString().slice(0, 10)}&` +
            `sortBy=relevancy&` +
            `language=en&` +
            `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        const proxyurl: string = "https://api.allorigins.win/raw?url=";

        super(proxyurl + encodeURIComponent(url), 86400000);
    }

    async get(): Promise<News[]> {
        return this.axios.get(this.url).then((response) => {
            console.log("Fetching news from News API... "); 
            console.log(`Response from ${Date.now().toLocaleString()}: ${JSON.stringify(response.data)}`)
            return response.data.articles as News[];
        });
    }

    getHashForCashing(): string {
        return hash("News");
    }

    shouldRetry(error: NewsApiError): boolean {
        return false;
    }

    onError(error: NewsApiError): Error {
        console.error(`News API error: ${error.code}, ${error.message}`);
        return new Error(`News API error: ${error.code}, ${error.message}`);
    }
}

export default NewsProvider;