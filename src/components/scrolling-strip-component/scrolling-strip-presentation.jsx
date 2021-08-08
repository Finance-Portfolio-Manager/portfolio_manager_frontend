// Author: David Garcia
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function ScrollingStripPresentation(props){

    const [json, setJson] = useState([]);

    useEffect(() => { setJson(props.json); } , [] ); 

    const [stockProp, setStockProp] = useState([]);
    const propVals = Object.values(json);

    useEffect(() => { setStockProp(props.stockJson); }, []);


    // console.log(stockPropArray);
    // var str = propVals.map((value) => ` ${value.symbol} ${value.PNL}%`);
//     propVals.map((value) => (
//         <div style={divStyle}>
//               <h6 style={hStyle}> {value.symbol}: </h6>
//               <h6 style={colorId(value.PNL)}> {value.PNL}% </h6>
//         </div>

//          stockPropArray.map((values) => <h6 style={hStyle}>{values.stockSymbol}:</h6>)
//     ))
    // const stockPropArray = Object.entries(stockProp);
    const stockPropJson = Object.keys(stockProp);

    const hStyle = {
        margin: 0,
        marginRight: 10,
        fonstSize: 14,
        display: "inline"
    }

    return(
        <Marquee style={marqueeStyle} speed="50" gradient={false}> 
        {stockPropJson.map((x) => 
            <div>
                <h6 style={hStyle}>{x}:</h6>
                <h6 style={colorId(stockProp[x])}>{stockProp[x]}</h6>
            </div>
            )}
        {/* use Object.Keys instead so that I can map and output the keys and the values?
            Regardless, look at the keys and entries functions for Object more in-depth */}
        </Marquee> 
    );

}

function colorId(pnl){
    return (pnl < 0) ? {display: "inline", margin: 0, marginRight: 10, color:"red"} : {display: "inline", marginRight: 10, margin: 0, color: "green"};
}

const marqueeStyle = {
    backgroundColor: "black",
    color: "white",
    position: "sticky",
    top: 0,
    paddingBottom: 2,
    marginTop: 0,
};



const divStyle = {
    margin: 0
}