import axios from 'axios';

const apiKey = 'c0ca553c2392479aa130befc0328e45c';
const query = 'crypto';
const sortBy = 'relevancy';
const pageSize = 20;
const from = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const url = 'https://newsapi.org/v2/everything?' +
            `pageSize=${ pageSize }&` +
            `q=${ query }&` +
            `from=${ from }&` +
            `sortBy=${ sortBy }&` +
            `apiKey=${ apiKey }`;

function format( response ) {
    return response.data.articles;
}

async function getNews() {
    const response =
      await axios.get(url);
    return format(response);
}

export default getNews;