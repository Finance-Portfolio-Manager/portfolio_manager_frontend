var barCount = 60;
var ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.width = 1000;
ctx.canvas.height = 250;

const getBarData = async (symbol) => { 
	
	return fetch(`./example-${symbol}-daily.json`)
		.then(response => {

			return response.json();

		}).then(data => {

			const barObjects = data["Time Series (Daily)"];
			const barKeys = Object.keys(barObjects).sort(()=>-1);

			// I'm not sure what is wrong.
			// console.log(barKeys[0])
			// console.log(barKeys.sort(()=>-1)[0])

			let initialDateStr = luxon.DateTime.fromRFC2822(convertDate(barKeys[0]))
			const barData = barKeys.map(e=> {
				initialDateStr = initialDateStr.plus({days: 1});
				console.log(initialDateStr)
				return {
					x: initialDateStr.valueOf(),
					// x: luxon.DateTime.fromRFC2822(convertDate(e)).valueOf(),
					o: parseFloat(barObjects[e]["1. open"]),
					h: parseFloat(barObjects[e]["2. high"]),
					l: parseFloat(barObjects[e]["3. low"]),
					c: parseFloat(barObjects[e]["4. close"])
				}
			})

			return barData.slice(0, barCount);

		});

}

getBarData("AAPL").then(barData=>{

	var chart = new Chart(ctx, {
		type: 'candlestick',
		data: {
			datasets: [{
				label: 'Example Symbol',
				data: barData
			}]
		}
	});

});

function convertDate(dateString) {
	dateString = dateString.replace(/(.*)-(.*)-(.*)/,(match, year, month, day)=>{
		let monthString = "";
		switch(month) {
			case "01":
				monthString = "Jan";
			case "02":
				monthString = "Feb";
			case "03":
				monthString = "Mar";
			case "04":
				monthString = "Apr";
			case "05":
				monthString = "May";
			case "06":
				monthString = "Jun";
			case "07":
				monthString = "Jul";
			case "08":
				monthString = "Aug";
			case "09":
				monthString = "Sep";
			case "10":
				monthString = "Oct";
			case "11":
				monthString = "Nov";
			case "12":
				monthString = "Dec";
		}
		return day + " " + monthString + " " + year + " 00:00 Z";
	})
	// return luxon.DateTime.fromRFC2822(dateString).valueOf();
	return dateString;
}