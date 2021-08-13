import React from "react";
import '../layout/NewsComponentStyle.css'
export const NewsPaperCard = ({title, url, description}) => {
  return (
    <div className="news__card-body">
      <div className="news__card-heading">
        <a href={url} className="smallnumber">
          Source
        </a>
        <h1 className='news_header-one'> {title} </h1>
      </div>

      <div className="news__card-explanation">
        <p>{description}</p>
      </div>
    </div>
  );
};
