import axios, { AxiosResponse } from 'axios';

const apiKey: string | undefined = process.env.REACT_APP_NEWS_API_KEY;
const query: string = 'crypto';
const sortBy: string = 'relevancy';
const pageSize: number = 20;
const from: string = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const language: string = 'en';
const url: string = 'https://newsapi.org/v2/everything?' +
  `pageSize=${pageSize}&` +
  `q=${query}&` +
  `from=${from}&` +
  `sortBy=${sortBy}&` +
  `language=${language}&` +
  `apiKey=${apiKey}`;
const proxyurl: string = "https://api.allorigins.win/raw?url=";

export interface News {
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

function format(response: AxiosResponse) {
  return response.data.articles as News[];
}

async function getNews(): Promise<News[]> {
  const response = await axios.get(proxyurl + encodeURIComponent(url));
  return format(response);
}

export default getNews;