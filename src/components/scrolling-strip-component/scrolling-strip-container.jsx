// Author: David Garcia

import React, {useState, useEffect} from "react";
import ScrollingStripPresentation from "./scrolling-strip-presentation";
import axios from "axios";

// const url = "http://23.22.140.95:8082";
const url = "http://3.133.113.250:8082/api/get-symbol-pnl"

//TODO: change to ec2 URL when update to backend is merged in
//TODO: figure out how to correctly test these elements


export default function ScrollingStripContainer(){
    var text = "⬆ ⬇ Just relax and let it flow. That easy. You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. We can fix anything. It just happens - whether or not you worried about it or tried to plan it. How to paint. That's easy. What to paint. That's much harder. Don't fiddle with it all day.";

    
        
    // Pass in an array of JSON
    // Stock Symbol
    // PNL
    // Attach an up or down arrow based on PNL

    // Have presentation parse through the array
    // Change colors of arrows based on up or down

    
    // console.log("stockVals", stockVals);
    // console.log(stockVals[0].stockSymbol);
    // stockVals.map((values) => 
    // let symbolArray = [...values.stockSymbol]));
    // let symbolArray;
    // [...symbolArray] = [stockVals.map((values) => values.stockSymbol)];
    

    // console.log(symbolArray);

    // return(
    //     <PresentScrollingStrip innerText={text} json={JSON}></PresentScrollingStrip>
    // );
    const JSON = [
        { symbol: "AMZN" , PNL: -5 },
        { symbol: "GOOG" , PNL: +5}
    ]

    const [stockJson, setStockJson] = useState([]);

    useEffect(()=> {
        getSymbolPnlFromApi(setStockJson);
        // getStockById(1,setStockJson); 
        // returns an array which looks like:
        // 0: Object {userId: 1, stockId: 1, stockSymbol: "AMZN"}
        // 1: Object {userId: 1, stockId: 2, stockSymbol: "GOOG"}
    },[]);
    
    // let stockVals = Object.values(stockJson);
    return(
        <ScrollingStripPresentation json={JSON} stockJson={stockJson}></ScrollingStripPresentation>
    );
    
}

// function getStockById(userId,setStockJson){

//     axios.get((url + `/stocks/all/${userId}`))
//     .then((resp) => {
//         setStockJson(resp.data);
//         // console.log(resp.data);
//     }, (error) => {
//         console.log(error);
//     });
// }

function getSymbolPnlFromApi(setStockJson){
    console.log("pinging server!");
    axios.post(
        url,
        '["MSFT","GOOG"]', //this eventually needs to be passed into the function
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
    ).then(resp => {
        setStockJson(resp.data);
        console.log("data", resp.data);
    }, (error) => {
        console.log(error)
    });
}