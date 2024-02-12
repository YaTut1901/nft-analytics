import Web3 from "web3";

const infuraApiKey: string | undefined = process.env.REACT_APP_INFURA_API_KEY;
const web3: Web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

async function getGasFee(): Promise<number> {
    try {
        const price = await web3.eth.getGasPrice();
        return parseInt(web3.utils.fromWei(price, 'gwei'));
    } catch (error) {
        console.error('Error fetching gas price:', error);
        throw error;
    }
}

export default getGasFee;
