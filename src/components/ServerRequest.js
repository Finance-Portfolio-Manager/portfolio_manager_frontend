//Author: Gregory McCoy
import axios from "axios";

export function PingNews(){
    return axios.get(`${process.env.REACT_APP_API_URL}/news/get-news`).then((response) => response.data);
}

export function PingStockApiSymbols(tickers){
    const url = process.env.REACT_APP_API_URL + "/api/get-symbol-pnl";
    return axios.post(url,
        JSON.stringify(tickers), //this eventually needs to be passed into the function
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then((response) => response.data);
}

export function PingApiLogin(json) {
    return axios.post(process.env.REACT_APP_API_URL+"/login", json, {headers:{'Content-Type': 'application/json'}})
        .then((response)=>response.data);
}