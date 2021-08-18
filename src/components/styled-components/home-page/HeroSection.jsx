/*
Carlos Galvan Jr 

Hero section component styles the main page
*/
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeroSection.css";
// import GitHubButton from "react-github-btn";
import { useState } from "react";
import { useEffect } from "react";

function HeroSection({
  topLine,
  headline,
  description,
  buttons,
  img,
  alt,
  imgStart,
}) 
{
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const value = sessionStorage.getItem("Authorization");
    setLoggedIn(value);
  },[])
  
  return (
    <>
      <div className="container">
        <div className="home__hero-section darkBg secondary-color primary-text">
          <div
            className="home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="home__hero-col">
              <div className="home__hero-text-wrapper">
                <div className="top-line accent-text">{topLine}</div>
                <h1 className="heading primary-text">{headline}</h1>
                <p className="home__hero-subtitle">{description}</p>
                <div className="hero__button-group">
                  {buttons.map((button) => {
                    return (
                      <Link to={button.link}>
                        {!loggedIn &&<Button
                          className="global__button-effect hero__button"
                          aria-label={button.ariaLabel}
                        >
                          {button?.buttonLabel}
                        </Button>}
                      </Link>
                    );
                  })}</div>

                {/* <GitHubButton
                  href="https://github.com/Finance-Portfolio-Manager/portfolio_manager_frontend"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star Finance-Portfolio-Manager/portfolio_manager_frontend on GitHub"
                  className='hero__github-button'
                >
                  Star
                </GitHubButton> */}


          
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img global__zoom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
