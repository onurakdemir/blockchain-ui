import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import TxIn from "./TxIn";
import TxOut from "./TxOut";


export default class Transaction extends React.Component {
    render() {
        const transaction = this.props.transaction;
        return (
            <div class="row text-warning border border-primary">
                <div class="col-6">
                    <p>Transaction : <b>{transaction.index}</b></p>
                </div>
                <div class="col-6">
                    <TxIn txIn={transaction.data[0].txIns[0]} />
                    <TxOut txOut={transaction.data[0].txOuts[0]} />
                </div>
            </div>

        );
    }
}