import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import TxIn from "./TxIn";
import TxOut from "./TxOut";


export default class Transaction extends React.Component {
    render() {
        const transactions = this.props.transactions;
        return (
            <div class="row text-warning border border-primary">
                <div class="col-6">
                    <p>Transaction : <b>{transactions.id}</b></p>
                </div>
                {/* <div class="col-6">
                    <TxIn txIn={transaction.txIn} />
                    <TxOut txOut={transaction.txOut} />
                </div> */}
            </div>

        );
    }
}