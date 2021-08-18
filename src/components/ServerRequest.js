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

export function PingApiRegister(json) {
    return axios.post(process.env.REACT_APP_API_URL+"/users", json, {headers:{'Content-Type': 'application/json'}})
    .then((response)=> response.data);
}

export function PingApiBalancesChart(id){
    return axios.get(process.env.REACT_APP_API_URL+`/balances/daily/${id}`, {
        headers:
        {'Authorization':sessionStorage.getItem("Authorization")}
    }).then((response) => response.data);
}

export function PingApiLoginFavorites(){
    return axios.get(process.env.REACT_APP_API_URL+"/login?token="+sessionStorage.getItem("Authorization"), 
    {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
    .then((response) => response.data);
}

export function PingApiFavoritesUserId(id){
    return axios.get( `${process.env.REACT_APP_API_URL}/portfolios/${id}/favorites`, {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
    .then((response) => response.data);
}

export function PingApiPortfoliosPublic(){
    return axios.get(process.env.REACT_APP_API_URL + "/portfolios/public", {headers: {"Authorization": sessionStorage.getItem("Authorization")}})
    .then((response)=>response.data);
}

export function PingApiPostFavorite(json){
    return axios.post(`${process.env.REACT_APP_API_URL}/favorites`, json, {headers: {"Authorization": sessionStorage.getItem("Authorization"), 'Content-Type': 'application/json'}})
    .then((response) => response.data);
}

export function PingApiPortfoliosUserId(id){
    return axios.get(`${process.env.REACT_APP_API_URL}/portfolios/${id}`, 
    {headers: {"Authorization": sessionStorage.getItem("Authorization"),
                "Access-Control-Allow-Origin": sessionStorage.getItem("Authorization")}}).then((response) => response.data);
}

export function PingApiChart(symbol){
    return axios.get(process.env.REACT_APP_API_URL + "/charts/" + symbol)
        .then((response) => response.data);
}

export function PingApiTransactions(json, jwt){
    return axios.post(process.env.REACT_APP_API_URL + "/transactions", json, {headers: {'Authorization': jwt, 'Content-Type': 'application/json'}})
    .then((response)=> response.data);
}

export function PingApiCreatePortfolio(json, jwt){
    return axios.post(process.env.REACT_APP_API_URL + "/portfolios", json, {headers: {'Authorization': jwt, 'Content-Type': 'application/json'}})
    .then((response) => response.data);
}