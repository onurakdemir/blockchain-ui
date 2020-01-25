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
    <div className="App">
      <Transaction transactions={TRANSACTIONS} />
    </div>
  );
}

export default App;
