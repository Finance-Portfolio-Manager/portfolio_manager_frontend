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
import { NewsPaperV2 } from "./NewsPaperV2";
// import { GrNext, GrPrevious } from "react-icons/gr";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  const getNews = () => {
    axios
      .get("http://23.22.140.95:8082/news/get-news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => console.log(`Error ${error}`));
  };
 
  useEffect(() => {
    getNews();
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
          {/* <div className="news__next-button-v2 news__button">
            <button
              onClick={incrementIndex}
              className="news__button primary-text"
              aria-label='next news article'
            >
              <GrNext className="primary-text" />
            </button>
          </div>
          <div className="news__previous-button-v2 news__button">
            <button
              onClick={decrementIndex}
              aria-label='previous news article'
            >
              <GrPrevious />
            </button>
          </div> */}

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
