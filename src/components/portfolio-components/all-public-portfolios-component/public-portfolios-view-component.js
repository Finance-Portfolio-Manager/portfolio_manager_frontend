//TODO: Render a list of PublicPortfolioView components based on the list of public portfolios passed in as props
import React from "react";
import { CardGroup, Col, Row, Card, Container } from "react-bootstrap";
import PublicPortfolioView from "../public-portfolio-component/public-portfolio-view";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

export default function PublicPortfoliosView(props) {
  return (
    <Container className="secondary-color mt-5">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <div className="row justify-content-md-center">
        <div className="h2" id="account-header">
        
       
          {props.isFavorites ? (
            <h2>Favorite Portfolios</h2>
          ) : (
            <h2>Public Portfolios</h2>
          )}

            {props.loading ? (
              <Spinner style={{margin:"15px"}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <></>
            )
            }

      </div>

          <div className="row justify-content-md-center">
            {props.portfolioList ? (
              props.portfolioList.map((portfolio) => {
                return (
                  <PublicPortfolioView
                    portfolio={portfolio}
                    username={portfolio.username}
                    isFavorites={props.isFavorites}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
