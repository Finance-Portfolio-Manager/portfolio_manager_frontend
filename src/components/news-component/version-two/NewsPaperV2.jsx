import React from "react";
import "./news-flex.css";
import { useState } from "react";
export const NewsPaperV2 = (props) => {
//   const [story, setStory] = useState(props.story);
  return (
    <div className="news__body primary-text">
      <div className="news__title-container global__gradient-background">
        <div className="news__center">
          <div className="news__title-header news__zoom global__gradient-text" >{props.story.title}</div>
          <div className="news__source-container">
            <a href={props.story.url} className="news__source-link">
              Source
            </a>
          </div>
        </div>
    
      </div>
      <div className="news__story-container news__story-center">
        <div className="news__description-card news__zoom">
          <p className="news__description">{props.story.description}</p>
          <div className="news__description-card-footer">
            <a href={props.story.url} className="news__readmore">
              read more
            </a>
          </div>
        </div>
        <div className="news__image-wrapper news__zoom">
          <img src={props.story.urlToImage} className="news__img" />
        </div>
      </div>
    </div>
  );
};
