/*
 Carlos Galvan Jr + Greg McCoy

 This is the container component that fetches the news and uses the NewsPaperV2 component to format
  TO DO:
  Add key binds
  implement data and author
  fix links
  fix mobiles
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import {PingNews} from "../../ServerRequest";
import { NewsPaperV2 } from "./NewsPaperV2";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    PingNews().then((data) => {
      setNews(data);
    })
  }, [setIndex]);

  const incrementIndex = () =>{
    setIndex((index + 1) % news.length);
  }
  const decrementIndex = () =>{
    setIndex((index - 1 + news?.length) % news?.length);
  }

  return (
    <>
      {news?.length ? (
        <>
          <NewsPaperV2 key={news[index]?.url} story={news[index]} incrementIndex={incrementIndex} decrementIndex={decrementIndex} />
        </>
      ) : (
        <div className="news__empty">
          <div className="news__empty-header">
            No news yet... Try again later
          </div>
        </div>
      )}
    </>
  );
};
