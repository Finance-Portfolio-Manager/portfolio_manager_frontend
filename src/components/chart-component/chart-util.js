import DateTime from "luxon/src/datetime";

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
            x: new Date(DateTime.fromRFC2822(convertDateString(e)).valueOf()),
            y: [open, high, low, close]
        };
    })
}

// convert this: 2021-08-03
// to this: 03 Aug 2021 00:00 Z
function convertDateString(dateString) {
	dateString = dateString
		.replace(/(.*)-(.*)-(.*)/,(match, year, month, day) => {
		let monthString = "";
		switch(month) {
			case "01":
				monthString = "Jan";
				break;
			case "02":
				monthString = "Feb";
				break;
			case "03":
				monthString = "Mar";
				break;
			case "04":
				monthString = "Apr";
				break;
			case "05":
				monthString = "May";
				break;
			case "06":
				monthString = "Jun";
				break;
			case "07":
				monthString = "Jul";
				break;
			case "08":
				monthString = "Aug";
				break;
			case "09":
				monthString = "Sep";
				break;
			case "10":
				monthString = "Oct";
				break;
			case "11":
				monthString = "Nov";
				break;
			case "12":
				monthString = "Dec";
				break;
            default:
                break;
		}
		return day + " " + monthString + " " + year + " 00:00 Z";
	})
	return dateString;
}

export {
    convertDateString, 
    convertSeriesData,
    initialSeriesData
};