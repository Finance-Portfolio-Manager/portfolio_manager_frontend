/* WIP
Fetches data from db and formats it with its children
This is a container component that will use axios to get the data...

Carlos Galvan Jr \ Team 2

*/

import { Row, Col } from "antd";
import React from "react";
import { PortfolioCard } from "./PortfolioCard";

const FetchCard = () => {
  // ./transactions getAllTransactions
  let mockTransactions = [
    {
      buy: true,
      note: "hello world",
      shareAmount: 100.0,
      sharePrice: 200.0,
      ticker: "AMC",
      token: "AUTH..",
      transactionId: 0,
      userId: 0, //???
    },
    {
      buy: true,
      note: "hello world",
      shareAmount: 111.0,
      sharePrice: 222.0,
      ticker: "ABC",
      token: "AUTH..",
      transactionId: 0,
      userId: 0, //???
    },
    {
        buy: true,
        note: "hello world",
        shareAmount: 111.0,
        sharePrice: 222.0,
        ticker: "ABC",
        token: "AUTH..",
        transactionId: 0,
        userId: 0, //???
      },
      {
          buy: true,
          note: "hello world",
          shareAmount: 111.0,
          sharePrice: 222.0,
          ticker: "ABC",
          token: "AUTH..",
          transactionId: 0,
          userId: 0, //???
        }
        
  ];
  const labels = ["Share Amount", "Share Price"];//THIS



  return (
    <>
      <Row className="grid-container">
        {mockTransactions.map((transaction) => (
          <Col>
            <PortfolioCard transaction={transaction} labels={labels}></PortfolioCard>
          </Col>
        ))}
      </Row>
    </>
  );
};


export default FetchCard;