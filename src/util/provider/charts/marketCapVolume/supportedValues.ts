import { SupportedCurrencies, SupportedPeriods } from "../../types";

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
        offset: 1,
        labels: ["02:00 AM", "04:00 AM", "06:00 AM", "08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM", "12:00 AM"]
    },
    WEEK: {
        mark: "7D", 
        offset: 7,
        labels: []
    },
    MONTH: {
        mark: "30D", 
        offset: 30,
        labels: ["Jan 24", "Jan 26", "Jan 28", "Jan 30", "Feb 1", "Feb 3", "Feb 5", "Feb 7", "Feb 9", "Feb 11", "Feb 13", "Feb 15"]
    }
}