import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import { getTransactions } from "../logic/TransactionService";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => setTransactions(getTransactions()), []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/blocks")
      .then(res => {
        let items = Object.values(res.data);
        setTransactions(items);
      });
  }, []);
  return (
    <div class="container">
      <h1 class="p-3 mb-2 bg-primary text-white">BlockChain ReactJS Explorer</h1>
      <h3 class="p-3 mb-2 bg-light text-dark">Your transactions.</h3>

      <div class="row">
        <div class="col-12">
        <ul>
        { transactions.map(a => <li>{a.data[0].txOuts[0].address}</li>)}
      </ul>
          {/* {
            transactions.map(transaction =>
              <Transaction transactions={transaction} />
            )
          } */}
        </div>
      </div>
    </div>
  );
}

export default App;
