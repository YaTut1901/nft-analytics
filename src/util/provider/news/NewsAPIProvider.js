import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const query = 'crypto';
const sortBy = 'relevancy';
const pageSize = 20;
const from = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const language = 'en';
const url = 'https://newsapi.org/v2/everything?' +
            `pageSize=${ pageSize }&` +
            `q=${ query }&` +
            `from=${ from }&` +
            `sortBy=${ sortBy }&` +
            `language=${ language }&` +
            `apiKey=${ apiKey }`;
const proxyurl = "https://api.allorigins.win/raw?url=";

function format( response ) {
    return response.data.articles;
}

async function getNews() {
    const response =
      await axios.get(proxyurl + encodeURIComponent(url));
    return format(response);
}

export default getNews;