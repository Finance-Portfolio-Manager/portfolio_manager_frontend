// Author: David Garcia
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function ScrollingStripPresentation(props){
   
    const marqueeStyle = {
        backgroundColor: "black",
        color: "white",
    };

    const hStyle = {
        fonstSize: 14,
        display: "inline",
        color:"white"
    }
    
    const divStyle = {
        margin: 0
    }
    const [json, setJson] = useState([]);

    useEffect(() => { setJson(props.json); } , [] ); 
    
    console.log(props.json);
    
    const propVals = Object.values(json);

    // var str = propVals.map((value) => ` ${value.symbol} ${value.PNL}%`);

    return(
        <Marquee style={marqueeStyle} speed="50" gradient={false}> 
        {propVals.map((value,index) => (
            <div key={"marqueeitem"+index} style={divStyle}>
                <h6 style={hStyle}> {value.symbol}: </h6>
                <h6 style={colorId(value.PNL)}> {value.PNL}% </h6>
            </div>
        ))}
    
        </Marquee> 
    );
    // const [symbolArray, setSymbolArray] = useState([]);

    // useEffect(() => { setSymbolArray(props.json); } , [] ); 

    // symbolArray.map((value) => console.log(value.stockSymbol));
    

    // return(
    //     <Marquee style={marqueeStyle} speed="50" gradient={false}>
    //         <h6 style={hStyle}>{/*symbolArray*/}</h6>
    //     </Marquee>

    // );
}

function colorId(pnl){
    return (pnl < 0) ? {display: "inline", margin: 0, marginRight: 10, color:"red"} : {display: "inline", marginRight: 10, margin: 0, color: "green"};
}