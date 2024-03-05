import { AxiosError } from "axios";
import Provider from "../Provider";
import { News, NewsApiError } from "../types";
import hash from "object-hash";

class NewsProvider extends Provider<News[]> {
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
            console.log(`Response from ${new Date(Date.now()).toISOString()}: ${JSON.stringify(response.data)}`)
            return response.data.articles as News[];
        });
    }

    getHashForCashing(): string {
        return hash("News");
    }

    onError(error: Error | AxiosError): Error {
        if (error instanceof AxiosError) {
            const data = error.response?.data;
            if ("code" in data && "message" in data) {
                const newsApiError = data as NewsApiError;
                return new Error(`News API error: ${newsApiError.code}, ${newsApiError.message}`);
            };
        };

        return error;
    }
}

export default NewsProvider;