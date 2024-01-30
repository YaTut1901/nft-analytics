async function getGasFee() {
    try {
        const response = await fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle');
        const data = await response.json();
        const baseFee = Math.floor(data.result.suggestBaseFee);
        const gasFee = Math.floor(data.result.ProposeGasPrice);

        return {
            baseFee: baseFee,
            priorityFee: gasFee - baseFee
        }
    } catch (error) {
        console.error('Error fetching gas price:', error);
        throw error;
    }
}

export default getGasFee;
