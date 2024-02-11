import ethPrice from "eth-price";

async function getETHPrice() {
    const price = await ethPrice("usd");
    return Math.round(price[0].slice(5));
}

export default getETHPrice;