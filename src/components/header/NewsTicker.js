import React, { useState, useEffect } from 'react';
import getNews from '../../util/NewsProvider';

const newsStyle = "text-xl mx-4";
function formatNews( news ) {
  return news.map(( newsItem, index ) => {
    return (
      index % 2 == 0 ? <span className={newsStyle}>{ newsItem.title } - { newsItem.source.name }</span>
                     : <span className={newsStyle}>|</span>
    );
  })
}

function NewsTicker() {
    const [news, setNews] = useState("");

    useEffect(() => {
      getNews().then((data) => {
          setNews(data);
      });
    }, []);

    return (
      <div className="relative py-1 flex overflow-x-hidden cursor-default">
        <div className="animate-marquee whitespace-nowrap">
          { news && formatNews( news ) }
        </div>
        <div className="absolute py-1 top-0 animate-marquee2 whitespace-nowrap">
          { news && formatNews( news ) }
        </div>
      </div>
    );
}

export default NewsTicker;