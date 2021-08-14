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
import { NewsPaperV2 } from "../version-two/NewsPaperV2";
import { GrNext, GrPrevious } from "react-icons/gr";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);
  // const [current, setCurrent] = useState({});

  const getNews = () => {
    axios
      .get("http://23.22.140.95:8082/news/get-news")
      .then((response) => {
        setNews(response.data);
      })
      // .then((response)=>setcurrent(response.data))
      .catch((error) => console.log(`Error ${error}`));
  };
  // const updateCurrent = () => {
  //   setCurrent(news[index]);
  // };
  useEffect(() => {
    getNews();
    // setCurrent(news[index])
  }, [setIndex]);

  /*  const nextStory = () => {
    // setCurrent({})
    let nextStact = news[(news.indexOf(current) + 1) % news.length];
    console.log(nextStact)
    setCurrent(nextStact);
  };
  const previousStory = () => {
    // console.log("index "  + news.indexOf(current), news )
    // let newsTitle = 
     const newsTitle = news.map(function(e) { return e.title; });
     let previousStack = news[(newsTitle.indexOf(current.title) - 1 + newsTitle.length) % newsTitle.length]

    // let previousStack = news[(news.indexOf(current) - 1 + news.length) % news.length]
    // console.log("prev " + JSON.stringify(previousStack))
    setCurrent(previousStory);
  }; */
  // const increment = ()
  return (
    <>
      {news?.length ? (
        <>
          <div className="news__previous-button news__button">
            <button
              onClick={() => {
                setIndex((index + 1) % news.length);
                // updateCurrent(news[index])
              }}
              className="news__button primary-text"
            >
              <GrNext className="primary-text" />
            </button>
          </div>
          <div className="news__next-button news__button">
            <button
              onClick={() => {
                setIndex((index - 1 + news?.length) % news?.length);
              }}
            >
              <GrPrevious />
            </button>
          </div>

          <NewsPaperV2 key={news[index]?.url} story={news[index]} />
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
