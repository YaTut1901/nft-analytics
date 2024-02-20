export type SupportedCurrencies = {
    [key: string]: Currency
}

export type SupportedPeriods = {
    [key: string]: Period
}

export type Period = {
    mark: string, 
    offset: number
}

export type Currency = {
    ticker: string,
    sign: string
}

export const Currencies: SupportedCurrencies = {
    USD: {
        ticker: "USD", 
        sign: "$"
    },
    ETH: {
        ticker: "ETH", 
        sign: "⟠"
    }
}

export const Periods: SupportedPeriods = {
    DAY: {
        mark: "24H", 
        offset: 1
    },
    WEEK: {
        mark: "7D", 
        offset: 7
    },
    MONTH: {
        mark: "30D", 
        offset: 30
    }
}