import React from 'react';
import { shallow } from 'enzyme';
import {PingNews, PingStockApiSymbols, PingApiBalancesChart, PingApiLoginFavorites, PingApiFavoritesUserId, PingApiPortfoliosPublic, PingApiPortfoliosUserId, PingApiChart} from '../ServerRequest';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import axios from 'axios';
import { relativeTimeRounding } from 'moment';

configure({adapter: new Adapter() });

jest.mock('axios');

describe("Testing Server requests...", () =>{
    test("Calling News Controller", () =>{

        const news = [
            {"title": "Facebook Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Netflix Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Instagram Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Amazon Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"},
            {"title": "Snapchat Ranked Among Today’s Trending Stocks", "description": "Q.ai runs daily factor models to get the most up-to-date reading on stocks and ETFs. Today, our deep-learning algorithms have identified Facebook among others.", "url": "https://www.forbes.com/sites/qai/2021/08/09/facebook-ranked-among-todays-trending-stocks/", "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61112c3daa5906c61c419c4e%2F0x0.png"}
        ];
        const resp = {data: news};
        axios.get.mockResolvedValue(resp);
        return PingNews().then(data => expect(data).toEqual(news));
    });

    test("Calling Api Symbol-Pnl Controller", ()=>{
        const symbol = {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
        };

        const resp = {data: symbol};
        axios.post.mockResolvedValue(resp);
        return PingStockApiSymbols(resp);
    });

    test("Calling Api PingApiBalancesChart", ()=> {
        const balances = [
            {
              "balance": 0,
              "balanceId": 0,
              "balanceType": "string",
              "date": "2021-08-18T19:07:57.449Z",
              "portfolioId": 0,
              "userId": 0
            }
        ];
        const resp = {data: balances};
        axios.get.mockResolvedValue(resp);
        return PingApiBalancesChart(resp);
    });

    test("Calling Api PingApiLoginFavorites",() => {
        const user = {
            "code": "string",
            "email": "string",
            "lastEmailEpochTime": 0,
            "password": "string",
            "userId": 0,
            "username": "string"
          };
        const resp = {data: user};
        axios.get.mockResolvedValue(resp);
        return PingApiLoginFavorites(resp);
    });

    test("Calling Api PingApiFavoritesUserId", ()=>{
        const model = [
            {
              "name": "string",
              "portfolioId": 0,
              "public": true,
              "stocks": [
                {
                  "avgBuyPrice": 0,
                  "changePercentage": 0,
                  "currentPrice": 0,
                  "portfolioId": 0,
                  "quantity": 0,
                  "symbol": "string"
                }
              ],
              "transactions": [
                {
                  "dateTime": "2021-08-18T19:15:23.116Z",
                  "portfolio": {
                    "name": "string",
                    "portfolioId": 0,
                    "public": true,
                    "user": {
                      "code": "string",
                      "email": "string",
                      "lastEmailEpochTime": 0,
                      "password": "string",
                      "userId": 0,
                      "username": "string"
                    }
                  },
                  "sharePrice": 0,
                  "stockSymbol": "string",
                  "transactionId": 0,
                  "transactionQuantity": 0
                }
              ],
              "username": "string",
              "value": 0
            }
        ]
        const resp = {data: model};
        axios.get.mockResolvedValue(resp);
        return PingApiFavoritesUserId(resp);
    });

    test("Calling Api PingApiPortfoliosPublic", ()=> {
        const model = [
            {
              "name": "string",
              "portfolioId": 0,
              "public": true,
              "stocks": [
                {
                  "avgBuyPrice": 0,
                  "changePercentage": 0,
                  "currentPrice": 0,
                  "portfolioId": 0,
                  "quantity": 0,
                  "symbol": "string"
                }
              ],
              "transactions": [
                {
                  "dateTime": "2021-08-18T19:27:08.414Z",
                  "portfolio": {
                    "name": "string",
                    "portfolioId": 0,
                    "public": true,
                    "user": {
                      "code": "string",
                      "email": "string",
                      "lastEmailEpochTime": 0,
                      "password": "string",
                      "userId": 0,
                      "username": "string"
                    }
                  },
                  "sharePrice": 0,
                  "stockSymbol": "string",
                  "transactionId": 0,
                  "transactionQuantity": 0
                }
              ],
              "username": "string",
              "value": 0
            }
        ];
        const resp = {data: model};
        axios.get.mockResolvedValue(resp);
        return PingApiPortfoliosPublic(resp);
    });

    test("Calling Api PingApiPortfoliosUserId", ()=> {
        const model = [
            {
              "name": "string",
              "portfolioId": 0,
              "public": true,
              "stocks": [
                {
                  "avgBuyPrice": 0,
                  "changePercentage": 0,
                  "currentPrice": 0,
                  "portfolioId": 0,
                  "quantity": 0,
                  "symbol": "string"
                }
              ],
              "transactions": [
                {
                  "dateTime": "2021-08-18T19:27:08.414Z",
                  "portfolio": {
                    "name": "string",
                    "portfolioId": 0,
                    "public": true,
                    "user": {
                      "code": "string",
                      "email": "string",
                      "lastEmailEpochTime": 0,
                      "password": "string",
                      "userId": 0,
                      "username": "string"
                    }
                  },
                  "sharePrice": 0,
                  "stockSymbol": "string",
                  "transactionId": 0,
                  "transactionQuantity": 0
                }
              ],
              "username": "string",
              "value": 0
            }
        ];
        const resp = {data: model};
        axios.get.mockResolvedValue(resp);
        return PingApiPortfoliosUserId(resp);
    });

    test("Calling Api PingApiChart", async ()=> {
        const model = "string";
        let resp = PingApiChart("AMZN");
        axios.get.mockImplementationOnce(()=> Promise.resolve(`${process.env.REACT_APP_API_URL}/charts/AMZN`));
        await expect(resp).resolves.toEqual(model);
        // expect(axios.get).toHaveBeenCalledWith(`${PingApiChart}/charts/SBUX`,);
    });

    // test("Calling Api PingApiLogin", ()=>{

    //     const req = {
    //         "password": "TestUser1",
    //         "username": "pass123"
    //       }
    //     let resp; 
    //     axios.post(process.env.REACT_APP_API_URL+"/login", req, {headers:{'Content-Type': 'application/json'}}).then((response) => resp = response.data);
    //     expect(resp).toBeTruthy();
    // });
});