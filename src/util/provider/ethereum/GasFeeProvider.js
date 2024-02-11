import Web3 from "web3";

const infuraApiKey = process.env.REACT_APP_INFURA_API_KEY || '28b8232536ff4760b207fb0271e0a99c';
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

async function getGasFee() {
    try {
        const price = await web3.eth.getGasPrice();
        return Math.round(web3.utils.fromWei(price, 'gwei'));
    } catch (error) {
        console.error('Error fetching gas price:', error);
        throw error;
    }
}

export default getGasFee;
