![test](https://i.imgur.com/bJmwANo.png)
# Apex Stocks
#### Reston 2106 Batch
Apex Stocks is created with the intention of providing a persistent, remote, location where users can track their investment 
positions. Users are able to persist their stock purchases and sales, see a graph visualization of their current portfolio balance,
and see stock-specific gains and losses. The backend is built to leverage AlphaVantage and Yahoo Finance to produce real-time
stock details. This ensures that users will see up-to-date valuations on their current positions. Users can also provide a valid
email address and receive daily updates on their portfolio performance, as well as receive alerts if prices fluctuate intensely.

#### Visit the website: [apexstocks.xyz](apexstocks.xyz)

> ### Profile Interactions
> * **Sign Up** - Create an account on portfolio manager!
> * **Log In** - Log in to an existing account
> * **Change Password** - Change password with an email verification service

> ### Transactions
> * **CREATE** - build your portfolios by creating transactions
> * **BUY/SELL** - indicate whether transaction was a buy or sell
> * **WHAT-IF** - mitigate some risk by using a virtual portfolio

>## How to use
>### Create an account
>Enter your information on the register page to create an account
>### Create a portfolio
>Create a portfolio to handle a group of holdings
>### Add transactions
>Enter the stock, number of shares, price you paid(or would have liked to have paid), and a note if you'd like
>### View your portfolios
>Your portfolios can handle groups of holdings. You can see your top holdings for each portfolio and add or delete portfolios.

>## Deployment
>* The deployed front-end and backend leverage a compose file which runs the full-stack application. An Nginx reverse proxy 
>routes requests to the same global address on port 80 to the backend and the frontend. 
>* Read more: [Docker Compose ReadMe](https://github.com/Finance-Portfolio-Manager/Compose)

## To-Do

The following things would have been nice to add, given time:
* Search algorithm for stock tickers
* Add functionality for cryptocurrencies
* Create an account / sign in with Google or Facebook
* Password hashing and salting

## License

###### Contributors: Aaron Parker, Apurv Patel, Carlos Galvan, Cody Anderson, Conor Scalf, Curtis Greene-Morgan, David Garcia, Elvis Lee, Fuming Zhao, Greg Mccoy, Kalvin Miller, Marc Hartley, Melanie Duah, Nick Bilotta, Quinton Liang, Rensy T Aikara, Trent Greenman, Wyatt Goettsch
