import axios from 'axios';

function getSymbolPnlFromApi(tickers){
    console.log("pinging server!");
    axios.post(
        url,
        JSON.stringify(tickers), //this eventually needs to be passed into the function
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
    ).then(resp => {
        console.log("data", resp.data);
        return resp.data;
    }, (error) => {
        console.log(error)
    });
}