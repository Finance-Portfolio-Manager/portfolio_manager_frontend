// Author: David Garcia
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function ScrollingStripPresentation(props){

    const stockPropJson = Object.keys(props.stockJson);

    const hStyle = {
        margin: 0,
        marginRight: 10,
        fonstSize: 14,
        display: "inline"
    }

    return(
        <Marquee style={marqueeStyle} speed="30" gradient={false}> 
        {stockPropJson.map((x) => 
            <div>
                <h6 style={hStyle}>{x}:</h6>
                <h6 style={hStyle, colorId(props.stockJson[x])}>{props.stockJson[x]}</h6>
            </div>
            
        )}
        {/* use Object.Keys instead so that I can map and output the keys and the values?
            Regardless, look at the keys and entries functions for Object more in-depth */}
        </Marquee> 
    );

}

function colorId(pnl){
    return (pnl < 0) ? 
            {display: "inline", margin: 0, marginRight: 10, color:"red"} : 
            {display: "inline",  margin: 0, marginRight: 10, color: "green"};
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