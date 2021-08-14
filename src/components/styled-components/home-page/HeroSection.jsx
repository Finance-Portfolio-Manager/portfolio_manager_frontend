/*
Carlos Galvan Jr 

Hero section component styles the main page
*/
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className="home__hero-section darkBg secondary-color primary-text">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line accent-text">{topLine}</div>
                <h1 className="heading primary-text">
                  {headline}
                </h1>
                <p className="home__hero-subtitle">{description}</p>
                <Link to="/">
                    <Button className='global__button-effect'>{buttonLabel}</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
