import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import TxIn from "./TxIn";
import TxOut from "./TxOut";


export default class Transaction extends React.Component {
    render() {
        const transactions = this.props.transactions;
        return (
            <div>
                <h3>Transaction</h3>
                <p>{transactions.id}</p>
                <p>Total amount: {transactions.amount}</p>
                <TxIn transaction={transactions}/>
                <TxOut transaction={transactions}/>
            </div>
        );
    }
}