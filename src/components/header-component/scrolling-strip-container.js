// Author: David Garcia

import React from "react";
import PresentScrollingStrip from "./scrolling-strip-presentation";

export default function ScrollingStripContainer(){
    var text = "⬆ ⬇ Just relax and let it flow. That easy. You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. We can fix anything. It just happens - whether or not you worried about it or tried to plan it. How to paint. That's easy. What to paint. That's much harder. Don't fiddle with it all day.";

    const JSON = [
        { symbol: "AMZN" , PNL: -5 },
        { symbol: "GOOG" , PNL: +5}
    ]
        
    // Pass in an array of JSON
    // Stock Symbol
    // PNL
    // Attach an up or down arrow based on PNL

    // Have presentation parse through the array
    // Change colors of arrows based on up or down

    return(
        <PresentScrollingStrip innerText={text} json={JSON}></PresentScrollingStrip>
    );
    
}