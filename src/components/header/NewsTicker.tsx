import React, { useState, useEffect } from 'react';
import getNews, { News } from '../../util/provider/news/NewsAPIProvider';
import { Link } from 'react-router-dom';

const newsStyle: string = "text-xl mx-4";

function formatNews(news: News[]): React.JSX.Element[] {
  return news.map((newsItem: News, index: number) => {
    return (
      index % 2 === 0 ? <Link
        to={ newsItem.url }
        key={ index }
        className={ newsStyle }>{ newsItem.title } - { newsItem.source.name }</Link>
        : <span
          key={ index }
          className={ newsStyle }>|</span>
    );
  })
}

function NewsTicker(): React.JSX.Element {
  const [news, setNews] = useState(new Array());

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
    });
  }, []);

  return (
    <div className="relative flex min-w-full overflow-hidden gap-4 select-none marquee--hover-pause bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg border-b-[1px] border-gray-600">
      <div className="flex shrink-0 justify-around min-w-full gap-4 scroll">
        {news && formatNews(news)}
      </div>
      <div className="flex shrink-0 justify-around min-w-full gap-4 scroll">
        {news && formatNews(news)}
      </div>
    </div>
  );
}

export default NewsTicker;