import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { PingApiTransactions } from "../ServerRequest";
import NewTransactionForm from "./new_transaction_form";


export default function NewTransaction(props){

    // const testPortfolio = {
    //     portfolioId: 1,
    //     portfolioName: "Test Portfolio 1",
    //     isPublic: true,
    //     user_id: 1
    // }

    const [transaction, setTransaction] = useState({"portfolio": props.portfolio});

    const handleChange = (e)=>{
        let {name, value} = e.target;
        if (name=="dateTime"){
            value = value+"T00:00:00"
        }
        let newTransaction = {...transaction, [name]:value};
        console.log(newTransaction);
        setTransaction(newTransaction);
    }


    const createNewTransaction = (e)=>{
        let jwtToken = sessionStorage.getItem("Authorization");
        e.preventDefault();
            PingApiTransactions(transaction, jwtToken).then(response=>{
                console.log(response);
                props.refreshAccountPage();
                props.onCloseTransactionForm();
            })
            .catch(err=>console.error(err));
    }

    const submitSellTransaction = (e) =>{
        let jwtToken = sessionStorage.getItem("Authorization");
        e.preventDefault();

        let stockOwned = props.portfolio.stocks.filter(stock=>stock.symbol == transaction.stockSymbol).pop();

        let quantityOwned = 0;
        if(stockOwned){
            quantityOwned = stockOwned.quantity;
        }

       if(transaction.transactionQuantity <= quantityOwned){
            let submitTransaction = transaction;
            submitTransaction = {...submitTransaction, transactionQuantity:(submitTransaction.transactionQuantity * -1)};
            PingApiTransactions(submitTransaction, jwtToken).then(response=>{
                console.log(response);
                props.refreshAccountPage();
                props.onCloseTransactionForm();        
            })
            .catch(err=>console.error(err));
       } else{
           console.log("You tried to sell stocks you didn't have")
           props.onCloseTransactionForm();
       }
    }


    return <NewTransactionForm 
        handleChange={handleChange} 
        submitBuy={createNewTransaction}
        submitSell={submitSellTransaction}
        />;
}
