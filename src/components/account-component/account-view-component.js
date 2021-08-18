import React from "react";
import { Button, CardGroup, Col, Row, Card, Container } from "react-bootstrap";
import PrivatePortfolioDetails from "../portfolio-components/private-portfolio-component/private-portfolio-details";
import PrivatePortfolioView from "../portfolio-components/private-portfolio-component/private-portfolio-view";
import { useState } from "react";
import Navigation from "../navigation/navigation";
import "../../css/account.css";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { Modal } from "react-bootstrap";
import CreatePortfolio from "../portfolio-components/create-new-portfolio/create-portfolio";
import { Spinner } from "react-bootstrap";


export default function AccountView(props) {
  let [displayPortfolio, setDisplayPortfolio] = useState(null);
  let [showNewPortfolioForm, setShowNewPortfolioForm] = useState(false);

  let handleClosePortfolioForm = () => setShowNewPortfolioForm(false);
  let handleOpenPortfolioForm = () => setShowNewPortfolioForm(true);

  let assignDisplayPortfolio = (portfolio) => {
    setDisplayPortfolio(portfolio);
  };

  let unassignDisplayPortfolio = () => {
    setDisplayPortfolio(null);
  };

  return (
    <Container className="secondary-color mt-5">

      <div className="h2" id="account-header">
        <span id="header-span" className="m-5 accent-text">
          {props.user.username}
        </span>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row justify-content-md-center">
          <Modal
            show={showNewPortfolioForm}
            onHide={handleClosePortfolioForm}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>New Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <CreatePortfolio 
              user={props.user} 
              onClosePortfolioForm={handleClosePortfolioForm}
              refreshAccountPage={props.refreshAccountPage}/>
            </Modal.Body>
          </Modal>
          <Col className='col-md-auto'>
            <Button primary onClick={handleOpenPortfolioForm} className='global__button-effect'>
              Create a new Portfolio
            </Button>
          </Col>


          {props.portfolioArray.length > 0 ? (
            <h2 className="account__headers mb-3">Your Portfolios</h2>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Row className='d-flex flex-wrap justify-content-evenly'>
        {displayPortfolio ? (
          <PrivatePortfolioDetails
            portfolio={displayPortfolio}
            user={props.user}
            unassignDisplayPortfolio={unassignDisplayPortfolio}

          />
        ) : (
          <></>
        )}
      </Row>
      <Row className="pb-5 d-flex flex-wrap justify-content-evenly ">
        {props.portfolioArray.length > 0 ? (
          props.portfolioArray.map((portfolio) => {
            return (
              <PrivatePortfolioView 
                                    portfolio={portfolio} 
                                    user={props.user} 
                                    assignDisplayPortfolio={assignDisplayPortfolio}
                                    refreshAccountPage={props.refreshAccountPage}/>
            );
          })
        ) : (
            
            props.loading ? (
              <Spinner style={{margin:"15px"}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <h2 className="account__headers">
                You don't have any portfolios yet
              </h2>
            )
          
        )}
      </Row>
    </Container>
  );
}



                               