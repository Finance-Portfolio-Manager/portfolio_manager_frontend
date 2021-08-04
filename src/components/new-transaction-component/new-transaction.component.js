import getTickers from "./tickers.js";

getUserFromToken(sessionStorage.getItem('Authorization')).then(data => {
    var userId = data.userId;
    const tickerList = getTickers();
        
    var tick = document.getElementById("ticker");
    var tickerError = document.getElementById("ticker-error");
    var transactionError = document.getElementById("transaction-error");

    tick.addEventListener('change', function(){
        tickerError.hidden = true;
        if(!tickerList.includes(tick.value.toUpperCase())){
            tickerError.hidden = false;
        }
    })

    var buy = document.getElementById("buy-btn");
    var sell = document.getElementById("sell-btn");
    var isABuy = true;

    buy.addEventListener('click', function(){
        isABuy = true;
    })

    sell.addEventListener('click', function(){
        isABuy = false;
    })

    document.getElementById("new-txn-form").addEventListener("submit", function(t){
        transactionError.hidden = true;
        t.preventDefault();

        var tickerSymobol = document.getElementById("ticker").value;
        var shareAmount = document.getElementById("share-amount").value;
        var sharePrice = document.getElementById("share-price").value;
        var note = document.getElementById("note").value;

        var newTransaction = {
            ticker:tickerSymobol,
            shareAmount: parseInt(shareAmount),
            sharePrice: parseInt(sharePrice),
            note:note,
            token:sessionStorage.getItem('Authorization'),
            isBuy:isABuy
        };

        if (isABuy == false){
            newTransaction.shareAmount *= -1;
        }

        var stock = {
            userId:userId,
            stockId:0,
            stockSymbol: newTransaction.ticker,
            stockQuantity: newTransaction.shareAmount
        }
        /*+ticker validated => validate if transaction is legal
        +legal transaction: on sell, stock exists and quantity is sufficient
        on buy: if stock doesn't exist, add stock
        on transaction: update quantity of stock
        */
        if (tickerError.hidden == true){
            getAllStocks(userId).then(data => {
                var validTransaction = false;
                var hasStock = false;
                for(var i = 0; i < data.length; i++){
                    if (data[i].stockSymbol == stock.stockSymbol){
                            validTransaction = true;
                            var match = i;
                            hasStock = true;
                            stock.stockId = data[i].stockId;
                    }
                }

                if (isABuy == false){
                    if (data[match].stockQuantity + stock.stockQuantity < 0){
                        validTransaction = false;
                    }
                }
                else{
                    validTransaction = true;
                }

                if (validTransaction == true){
                    if (hasStock == true){
                        if (data[match].stockQuantity + stock.stockQuantity == 0){
                            deleteStock(stock);
                        }
                        else{
                            stock.stockQuantity += data[match].stockQuantity;
                            updateStock(stock);
                        }
                    }
                    else{
                        addStock(stock);
                    }
                    fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/transactions/new", {
                        method: 'post',
                        headers: new Headers({
                            'Content-Type':'application/json',
                            'Authorization':sessionStorage.getItem('Authorization')
                        }),
                        body: JSON.stringify(newTransaction)
                    }).then(response => response.json())
                    .then(data => {
                        window.location.href = "http://portfolio-manager-revature.s3-website.us-east-2.amazonaws.com/#/portfolio";
                    })
                    .catch(error => console.error(error));
                }
                else{
                    transactionError.hidden = false;
                }
            })
            
        }
    });
});


var validateTicker = function(tickerSymobol) {
    // check whether ticker is valid

    // var tickerSymobol = document.getElementById("ticker").value;

    fetch("tickers.json").then(response => {
        return response.json();
    }).then(data => {
        const tickerList = data;
    });

    if(Object.values(tickerList).includes(tickerSymobol)) {
        console.log("yay");
        return true;
    }

    // var stocks = require('stock-ticker-symbol');
    // if(stocks.lookup(ticker)===null) {
    //     tickerError.hidden = false;
    //     return false;
    // }else {
    //     return true;
    // }

}

function getUserFromToken(token){
    return fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/username?token=" + token, {
        method: 'get',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
    }).then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        }) 
    });
}

function addStock(stock){
    fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/stocks", {
        method: 'post',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify(stock)
    }).then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        }) 
    });
}

function deleteStock(stock){
    fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/stocks", {
        method: 'delete',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify(stock)
    }).then((response) => { 
        return response.json()
        .catch((error) => {
            console.log(error);
        }) 
    });
}

function updateStock(stock){
    fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/stocks", {
        method: 'put',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify(stock)
    }).then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        }) 
    });
}

function getAllStocks(userId){
    return fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/stocks/all/" + userId, {
        method: 'get',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }).then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        }) 
    });
}
