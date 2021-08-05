const GrandFetchCard = (props) => {
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
  ];

  //create one master object of the fetched transactions
  const gcd = mockTransactions.map((item) => {
    
    
  });
  return <>{console.log(gcd)}</>;
};


export default GrandFetchCard;
