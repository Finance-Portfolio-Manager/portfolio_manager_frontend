import React from "react";
import { Button, CardGroup, Col} from "react-bootstrap";
import PrivatePortfolioDetails from "../portfolio-components/private-portfolio-component/private-portfolio-details";
import PrivatePortfolioView from "../portfolio-components/private-portfolio-component/private-portfolio-view";
import { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

// import PortfolioCard from "../portfolio-component/portfolio-card-component";
import Navigation from "../navigation/navigation";
import '../../css/account.css'
import { OmitProps } from "antd/lib/transfer/ListBody";
import { Modal } from "react-bootstrap";
import CreatePortfolio from "../portfolio-components/create-new-portfolio/create-portfolio";
//TODO: will be importing functions not yet defined

//TODO: This will take in a list of portfolios as props and render them
export default function AccountView(props){

    let [displayPortfolio, setDisplayPortfolio] = useState(null);
    let [showNewPortfolioForm, setShowNewPortfolioForm] = useState(false);

    let handleClosePortfolioForm = () => setShowNewPortfolioForm(false);
    let handleOpenPortfolioForm = () => setShowNewPortfolioForm(true);

    let assignDisplayPortfolio = (portfolio) => {
        setDisplayPortfolio(portfolio);
    }

    let unassignDisplayPortfolio = () => {
        setDisplayPortfolio(null);
    }
 
    return (
        <Container className="secondary-color mt-5">
            <div className="h2" id="account-header">
                <span id="header-span" className="m-5 accent-text">{props.user.username}</span>
                {/* depending on streatch goals, maybe a dark theme toggle can go up here */}
            </div>
            
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="row">
                    <Modal 
                        show={showNewPortfolioForm} 
                        onHide={handleClosePortfolioForm}
                        size="lg">
                        <Modal.Header closeButton>
                        <Modal.Title>New Portfolio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CreatePortfolio 
                                user={props.user} 
                                onClosePortfolioForm={handleClosePortfolioForm}
                                portfolioArray={props.portfolioArray}/>
                        </Modal.Body>
                    </Modal>
                    <Col>
                    <Button primary onClick={handleOpenPortfolioForm}>Create a new Portfolio</Button>
                    </Col>
                    {props.portfolioArray.length > 0 ?
                        <h2 className='account__headers mb-3'>Your Portfolios</h2>
                        :
                        <></>
                    }   
            </div>
<Row>

                    {displayPortfolio ? 
                    <PrivatePortfolioDetails portfolio={displayPortfolio} user={props.user} unassignDisplayPortfolio={unassignDisplayPortfolio}/>
                    :
                    <></>}
                    </Row>
            <Row className='pb-5'>

                        
                        {props.portfolioArray.length > 0 ? 
                            props.portfolioArray.map((portfolio) => {
                                return(                 
                                    <PrivatePortfolioView 
                                    portfolio={portfolio} 
                                    user={props.user} 
                                    assignDisplayPortfolio={assignDisplayPortfolio}/>
                                )
                            })
                            :
                            <h2 className='account__headers'>You don't have any portfolios yet</h2>
                        }
            </Row>
        </Container>
    )

}

// example of nested structure
// account: (account summary?) -> username, full name, *darktheme toggle?(tbd)
//
//     portfolio card 1 ( name - total value - average change )
//         portfolio details:
//              stocks - amounts - current value - change  ->  transaction history
//
//     portfolio card 2 ( name - total value - average change )