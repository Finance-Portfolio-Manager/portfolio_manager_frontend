import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsPaper } from "../components/NewsPaper";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const getNews = () => {
    axios
      .get("http://localhost:3004/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.log(`Error ${error}`));
  };
  useEffect(() => {
    getNews();
  }, []);

  const NewStoryMapper = () => {
    return (
      <>
        {news.map((story) => {
          return (<NewsPaper key={story.url} story={story} />);
        })}
      </>
    );
  };
  return <>{news.length > 0 ? NewStoryMapper() : <p>No news yet</p>}</>;
};
