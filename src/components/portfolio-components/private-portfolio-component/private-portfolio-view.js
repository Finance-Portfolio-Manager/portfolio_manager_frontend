import React from "react";
import { useState } from "react";
import PrivatePortfolioCard from "./private-portfolio-card";
import NewTransaction from "../../new-transaction-component/new_transaction";
import { Modal } from "react-bootstrap";

export default function PrivatePortfolioView(props){

    function setDisplayPortfolio(){
        props.assignDisplayPortfolio(props.portfolio);
        window.scrollTo(0,0);
    }

    // function addTransaction(){
    //     return(
    //         <div class="container">
    //             <NewTransaction portfolio={props.portoflio}/>
    //         </div>
    //     )
    // }

    let [showNewTransationForm, setShowNewTransactionForm] = useState(false);
    
    let handleCloseTransactionForm = () => setShowNewTransactionForm(false);
    let handleOpenTransactionForm = () => {
        console.log(props.portfolio);
        setShowNewTransactionForm(true);}

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
            <Modal 
                show={showNewTransationForm} 
                onHide={handleCloseTransactionForm}
                size="lg">
                <Modal.Header closeButton>
                <Modal.Title>New Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewTransaction 
                        portfolio={props.portfolio} 
                        onCloseTransactionForm={handleCloseTransactionForm}
                        refreshAccountPage={props.refreshAccountPage}/>
                </Modal.Body>
            </Modal>

            <PrivatePortfolioCard 
            user={props.user} 
            portfolio={props.portfolio} 
            setDisplayPortfolio={setDisplayPortfolio}
            onOpenTransactionForm={handleOpenTransactionForm}
            />
        </>
    )
}
