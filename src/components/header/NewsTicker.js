import React, { useState, useEffect } from 'react';
import getNews from '../../util/provider/news/NewsAPIProvider';
import { Link } from 'react-router-dom';

const newsStyle = "text-xl mx-4";
function formatNews( news ) {
  return news.map(( newsItem, index ) => {
    return (
      index % 2 === 0 ? <Link to={ newsItem.url } className={ newsStyle }>{ newsItem.title } - { newsItem.source.name }</Link>
                      : <span className={ newsStyle }>|</span>
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
      <div className="relative flex min-w-full overflow-hidden gap-4 select-none marquee--hover-pause">
	      <div class="flex shrink-0 justify-around min-w-full gap-4 scroll">
          { news && formatNews( news ) }
	      </div>
	      <div class="flex shrink-0 justify-around min-w-full gap-4 scroll">
          { news && formatNews( news ) }
	      </div>
      </div>
    );
}

export default NewsTicker;