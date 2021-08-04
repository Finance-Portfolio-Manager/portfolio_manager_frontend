var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 1000;
ctx.canvas.height = 250;

const getBarData = async(symbol, periods) => {

	if (periods < 10) {
		periods = 10;
	} else if (periods > 100) {
		periods = 100;
	}

	return fetch(`./examples/example-${symbol}-daily.json`)
	.then(response => {
		return response.json();
	}).then(rawData => {
		const barObjects = rawData["Time Series (Daily)"]
		const barKeys = Object.keys(barObjects).reverse();
		const barData = barKeys.map(e => {
			return {
				x: luxon.DateTime.fromRFC2822(convertDateString(e)).valueOf(),
				o: parseFloat(barObjects[e]["1. open"]),
				h: parseFloat(barObjects[e]["2. high"]),
				l: parseFloat(barObjects[e]["3. low"]),
				c: parseFloat(barObjects[e]["4. close"])
			};
		});

		return {
			symbol: symbol,
			barData: barData.slice(barData.length - periods, barData.length)
		}
	})

}

getBarData("IBM", 100).then(({symbol, barData}) => {

	var chart = new Chart(ctx, {
		type: 'candlestick',
		data: {
			datasets: [{
				label: symbol,
				data: barData
			}]
		}
	});

})

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
		}
		return day + " " + monthString + " " + year + " 00:00 Z";
	})
	return dateString;
}