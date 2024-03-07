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

export type RawCapVolumeData = Array<{
    timestamp: number;
    cap: number;
    volume: number;
}>

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

type TopCollectionsCollection = {
    rank: number;
    collection_title: string,
    collection_image: string,
    floor_price_usd: string,
    floor_price_24hr_percent_change: string,
    collection_address: string,
    floor_price: string,
    floor_price_usd_24hr_percent_change: string,
}

export type TopCollectionsByCapCollection = TopCollectionsCollection & {
    market_cap_usd: string,
    market_cap_24hr_percent_change: string,
    volume_usd: string,
    volume_24hr_percent_change: string,
}

export type TopCollectionsByVolumeCollection = TopCollectionsCollection & {
    volume_usd: string,
    volume_24hr_percent_change: string,
    average_price_usd: string,
    average_price: string,
    floor_price_7d_percent_change: string,
    floor_price_usd_7d_percent_change: string,
    floor_price_30d_percent_change: string,
    floor_price_usd_30d_percent_change: string,
}

export type TopCollectionsByCap = Array<TopCollectionsByCapCollection>;
export type TopCollectionsByVolume = Array<TopCollectionsByVolumeCollection>;

export type TopCollections = Array<TopCollectionsByCapCollection> | Array<TopCollectionsByVolumeCollection>;