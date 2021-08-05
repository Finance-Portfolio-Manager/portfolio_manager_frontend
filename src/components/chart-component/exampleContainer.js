import React from "react";
import ExampleCandle from "./exampleCandle";

import exampleData from "../../exampleData/example-AAPL-daily.json";

function ExampleContainer(props) {

    return (
        <ExampleCandle rawData={exampleData}></ExampleCandle>
    )

}

export default ExampleContainer;