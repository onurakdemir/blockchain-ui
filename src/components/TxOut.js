import React from "react";
import PropTypes from "prop-types";
import "normalize.css";

export default class TxOut extends React.Component {
  static propTypes = {
    address: PropTypes.string,
    amount: PropTypes.number,
  };

  render() {
    const txOut = this.props.txOut;
    return (
      <div class="card">
        <div class="card-body">
          <h4>TX_OUT</h4>
          <p>ADDRESS : {txOut.address}</p>
          <p>AMOUNT  : {txOut.amount}</p>
        </div>
      </div>
    )
  }
}