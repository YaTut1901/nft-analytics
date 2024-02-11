import React, { useEffect, useState } from "react";
import getNews from "../util/provider/news/NewsAPIProvider";

function Marketplace(): React.JSX.Element {
  const [news, setNews] = useState(new Array());

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
    });
  }, []);

  return (
    <div>
      <h2>Marketplace Component</h2>
      <p>News: {JSON.stringify(news)} </p>
    </div>
  );
}

export default Marketplace;