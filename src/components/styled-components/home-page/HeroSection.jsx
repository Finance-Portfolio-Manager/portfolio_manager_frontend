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
      <div className="home__hero-section darkBg secondary-color">
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
                <div className="top-line">{topLine}</div>
                <h1 className="heading">
                  {headline}
                </h1>
                <p className="home__hero-subtitle">{description}</p>
                <Link to="/">
                    <Button>{buttonLabel}</Button>
                  {/* <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button> */}
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
