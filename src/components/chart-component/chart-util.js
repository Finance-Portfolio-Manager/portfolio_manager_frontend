Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const initialSeriesData = (startDate, periods) => {
    let seriesData = [];
    for (let i = 0; i < periods; i++) {
        startDate = startDate.addDays(1);
        seriesData.push([
            startDate, [0,0,0,0]
        ]);
    }
    return seriesData;
}

const convertSeriesData = (rawSeriesData) => {
    return Object.keys(rawSeriesData).reverse().map(e => {
        const open  = parseFloat(rawSeriesData[e]["1. open"]);
        const high  = parseFloat(rawSeriesData[e]["2. high"]);
        const low   = parseFloat(rawSeriesData[e]["3. low"]);
        const close = parseFloat(rawSeriesData[e]["4. close"]);
        return {
            x: new Date(e),
            y: [open, high, low, close]
        };
    })
}

export {
    convertSeriesData,
    initialSeriesData
};