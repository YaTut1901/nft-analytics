export type News = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type Rates = {
	[currency: string]: number;
}

export type RawMarketData = {
    timestamp: number[];
    data: number[];
}

export type RawCapVolumeData = {
    timestamp: number[];
    cap: number[];
    volume: number[];
}

export type CapVolumeResponse = {
    x: number[];
    y: number[];
}

export type SupportedCurrencies = {
    [key: string]: Currency
}

export type SupportedPeriods = {
    [key: string]: Period
}

export type Period = {
    mark: string, 
    offset: number,
    labels: string[]
}

export type Currency = {
    ticker: string,
    sign: string
}

export type CachedItem = {
    timestamp: number;
    data: string;
}

export type NewsApiError = {
    code: string;
    message: string;
}

export type TokenPriceError = {
    Message: string;
}

export type GasFeeError = {
    message: string;
}

export type MarketError = {
    code: number;
    detail: MarketErrorDetail[];
}

type MarketErrorDetail = {
    msg: string;
    type: string;
    loc: (string | number)[];
}