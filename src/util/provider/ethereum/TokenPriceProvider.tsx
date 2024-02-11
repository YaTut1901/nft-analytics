import axios from "axios";

interface Rates {
	[currency: string]: number;
}

async function getTokenPrice(from: string, to: string | string[]): Promise<Rates> {
	const url = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to.concat(',')}`;

	return await axios.get(url).then((response) => {
		const rates: Rates = response.data as Rates;
		Object.keys(rates).forEach((key) => {
			rates[key] = Math.round(rates[key]);
		});
		return rates;
	});
}

export default getTokenPrice;