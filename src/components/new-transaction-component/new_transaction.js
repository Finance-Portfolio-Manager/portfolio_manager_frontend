import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import NewTransactionForm from "./new_transaction_form";


export default function NewTransaction(props){

    const [transaction, setTransaction] = useState({});

   const handleChangeSwitch = (e)=>{
        let newTransaction = {...transaction};
        switch(e.target.name){
            case "stocksymbol":
                newTransaction.ticker = e.target.value;
                break;
            case "quantity":
                newTransaction.quantity = e.target.value;
                break;
            case "price":
                newTransaction.price = e.target.value;
                break;
            case "date":
                newTransaction.date = e.target.value;
                break;
            case "note":
                newTransaction.note = e.target.value;
                break;
            default:
        }
        console.log(newTransaction);
        setTransaction(newTransaction);
   }

   const handleChangeDynamic = (e)=>{
       const inputFieldName = e.target.name;
       const inputValue = e.target.value;
       const newTransaction = {...transaction};
       newTransaction[inputFieldName] = inputValue;
       console.log(newTransaction);
       setTransaction(newTransaction);
   }

   const handleChange = (e)=>{
        const {name, value} = e.target;
        let newTransaction = {...transaction, [name]:value};
        console.log(newTransaction);
        setTransaction(newTransaction);
    }

    const createNewTransaction = (e)=>{
        e.preventDefault();
        // axios.post("http://23.22.140.95:8082/transactions/new", transaction, {headers: {'Content-Type': 'application/json'}})
        axios.post(process.env.REACT_APP_API_URL + "/transactions/new", transaction, {headers: {'Content-Type': 'application/json'}})
            .then(response=>{
                console.log(response);
            })
            .catch(err=>console.error(err));
    }

    const buyConfirm = (e)=>{
        console.log(e.target.name);
    }


    return <NewTransactionForm handleChange={handleChange} buyConfirm={buyConfirm} submitConfirm={createNewTransaction}></NewTransactionForm>;
}
