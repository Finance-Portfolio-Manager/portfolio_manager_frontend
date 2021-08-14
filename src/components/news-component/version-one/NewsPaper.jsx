import React, { useState, useEffect } from "react";
import { axios } from "axios";
import { NewsPaperCard } from './NewsPaperCard';
// import '../layout/NewsComponentStyle.css'
export const NewsPaper = (props) => {
  const [story, setStory] = useState(props.story)


  return (
    <div className="news__hero-section darkBg secondary-color">
      <div className="news__container">
        <div
          className="news__row news__hero-row"
          style={{
            display: "flex",
            flexDirection: "row-reverse"
          }}
        >
          <div className="news__col">
              {console.log(story)}
              <NewsPaperCard {...story} />
          </div>
          <div className="news__col">
            <div className="news__hero-img-wrapper">
              <img src={story.urlToImage}  className="news__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
