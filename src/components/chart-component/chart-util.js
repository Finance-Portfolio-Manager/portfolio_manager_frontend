import DateTime from "luxon/src/datetime";

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

const convertRawData = (rawData) => {
    const barObjects = rawData["Time Series (Daily)"];
    return Object.keys(barObjects).reverse().map(e => {
        const open  = parseFloat(barObjects[e]["1. open"]);
        const high  = parseFloat(barObjects[e]["2. high"]);
        const low   = parseFloat(barObjects[e]["3. low"]);
        const close = parseFloat(barObjects[e]["4. close"]);
        return {
            x: new Date(DateTime.fromRFC2822(convertDateString(e)).valueOf()),
            y: [open, high, low, close]
        };
    })
}

const initialData = {
	"Meta Data": {
		"1. Information": "Loading...",
		"2. Symbol": "Loading...",
		"3. Last Refreshed": "1990-01-01",
		"4. Output Size": "Compact",
		"5. Time Zone": "US/Eastern"
	},
	"Time Series (Daily)": {
        "2021-08-04": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-08-03": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-08-02": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-30": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-29": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-28": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-27": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-26": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-23": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-22": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-21": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-20": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-19": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-16": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-15": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-14": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-13": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-12": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-09": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-08": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-07": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-06": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-02": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-07-01": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-30": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-29": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-28": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-25": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-24": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-23": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-22": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-21": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-18": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-17": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-16": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-15": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-14": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-11": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-10": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-09": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-08": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-07": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-04": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-03": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-02": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-06-01": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-28": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-27": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-26": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-25": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-24": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-21": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-20": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-19": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-18": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-17": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-14": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-13": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-12": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-11": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-10": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-07": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-06": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-05": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-04": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-05-03": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-30": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-29": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-28": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-27": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-26": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-23": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-22": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-21": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-20": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-19": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-16": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-15": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-14": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-13": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-12": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-09": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-08": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-07": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-06": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-05": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-04-01": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-31": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-30": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-29": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-26": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-25": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-24": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-23": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-22": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-19": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-18": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-17": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-16": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        },
        "2021-03-15": {
            "1. open": "0",
            "2. high": "0",
            "3. low": "0",
            "4. close": "0",
            "5. volume": "0"
        }
	}
}
    
export {convertRawData, initialData};