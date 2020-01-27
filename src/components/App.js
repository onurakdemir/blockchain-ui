import React from 'react';
import logo from './logo.svg';
import './App.css';
import './TxIn';
import Transaction from './Transaction';

const TRANSACTIONS =
{
  id: 'eberrer45354ddfeer3443df',
  amount: 50,
  txIn: { txOutId: '1', txOutIndex: '0', signature: 'roll' },
  txOut: { address: '34ere34er3dddddfff', amount: 50 }
}

function App() {
  return (
    <div class="container">
      <h1 class="p-3 mb-2 bg-primary text-white">BlockChain ReactJS Explorer</h1>
      <h3 class="p-3 mb-2 bg-light text-dark">Your transactions.</h3>

      <div class="row">
        <div class="col-12">
          <Transaction transactions={TRANSACTIONS} />
        </div>
      </div>
    </div>
  );
}

export default App;
