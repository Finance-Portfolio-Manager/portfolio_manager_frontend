import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import NewTransactionForm from "./new_transaction_form";


export default function NewTransaction(props){

    const [transaction, setTransaction] = useState({});

/*
    {
        "ticker": "BRUH",
        "shareAmount": 2,
        "sharePrice": 2,
        "note": 1,
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0UUwiLCJleHAiOjE2Mjg3MjY3NTYsImlhdCI6MTYyODY5MDc1Nn0.cKtFiY4y4tWmt4buBbsaHXv_OIGiu5vrhqUWCYVyuM8MuP6MdhgWBel-jysBQ0yklL1sBdkxfCRrLv1vk6rA2A",
        "isBuy": true
    }
*/
    transaction.ticker = "BRUH";
    transaction.shareAmount = 1;
    transaction.sharePrice = 1;
    transaction.note = "1";
    transaction.token = "";
    transaction.isBuy = true;

    const handleChange = (e)=>{
        const {name, value} = e.target;
        let newTransaction = {...transaction, [name]:value};

        console.log(newTransaction);
        setTransaction(newTransaction);
    }

    const createNewTransaction = (e)=>{
        transaction.token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0UUwiLCJleHAiOjE2Mjg3MjY3NTYsImlhdCI6MTYyODY5MDc1Nn0.cKtFiY4y4tWmt4buBbsaHXv_OIGiu5vrhqUWCYVyuM8MuP6MdhgWBel-jysBQ0yklL1sBdkxfCRrLv1vk6rA2A";
        transaction.isBuy = true;
        e.preventDefault();
        // axios.post("http://23.22.140.95:8082/transactions/new", transaction, {headers: {'Content-Type': 'application/json'}})
        axios.post(process.env.REACT_APP_API_URL + "/transactions/new", transaction, {headers: {'Content-Type': 'application/json'}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }

    const getNewTransaction = (e)=>{
        e.preventDefault();
        axios.post("http://23.22.140.95:8082/transactions?userId=1", transaction, {headers: {'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0UUwiLCJleHAiOjE2Mjg3MjY3NTYsImlhdCI6MTYyODY5MDc1Nn0.cKtFiY4y4tWmt4buBbsaHXv_OIGiu5vrhqUWCYVyuM8MuP6MdhgWBel-jysBQ0yklL1sBdkxfCRrLv1vk6rA2A"}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }

    const buyConfirm = (e)=>{
        if (e.target.name == "Sell"){
            transaction.isBuy = false;
        }
        else {
            transaction.isBuy = true;
        }
        console.log(e.target.name);
    }


    return <NewTransactionForm handleChange={handleChange} buyConfirm={buyConfirm} submitConfirm={createNewTransaction} getTransaction={getNewTransaction}></NewTransactionForm>;
}
