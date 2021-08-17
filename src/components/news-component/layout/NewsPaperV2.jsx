import React from "react";
import "../../../css/news-flex.css";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export const NewsPaperV2 = (props) => {
  //   const [story, setStory] = useState(props.story);
  return (
    <div className="news__body primary-text global__link">
      <div className="news__container ">
        <div className="news__title-container global__gradient-background">
          <div className="news__center">
            <div className="news__title-header news__zoom global__gradient-text">
              {props.story.title}
            </div>
            <div className="news__source-container ">
              <a href={props.story.url} className="news__source-link ">
                Source
              </a>
            </div>
          </div>
          <div className="news__next-button-v2 ">
            <button
              onClick={props.incrementIndex}
              className="news__button primary-text"
              aria-label='next news article'
            >
              <GrNext className="primary-text" />
            </button>
          </div>
          <div className="news__previous-button-v2">
            <button
              onClick={props.decrementIndex}
              aria-label='previous news article'
            >
              <GrPrevious />
            </button>
          </div>
        </div>
        <div className="news__story-container">
          <div className="news__row">
            <div className="news__col news__zoom">
              <div className="news__text-wrapper">
                <p className="news__description">{props.story.description}</p>
                <div className="news__description-card-footer">
                  <a href={props.story.url} className="news__readmore">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="news__col news__zoom">
              <div className="news__image-wrapper">
                <img
                  src={props.story.urlToImage}
                  alt="news article image"
                  className="news__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
