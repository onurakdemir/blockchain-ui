import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import { getTransactions } from "../logic/TransactionService";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(function (res) {
      let items = Object.values(res.data);
      setTransactions(items);
    }).catch(function (response) {
      console.log(response);
    });
  });

  return (
    <div class="container">
      <h1 class="p-3 mb-2 bg-primary text-white">BlockChain ReactJS Explorer</h1>
      <h3 class="p-3 mb-2 bg-light text-dark">Your transactions.</h3>

      <div class="row">
        <div class="col-12">
          <ul>
            {transactions.map(a =>
              <li>{a.index} {a.data[0].txOuts[0].address}  {a.data[0].txOuts[0].amount}</li>
            )}
          </ul>
          { transactions.map(transaction => <Transaction transaction={transaction} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
