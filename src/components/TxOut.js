import React from "react";
import PropTypes from "prop-types";
import "normalize.css";

export default class TxOut extends React.Component {
  static propTypes = {
    address: PropTypes.string,
    amount: PropTypes.number,
  };

  render() {
    const transaction = this.props.transaction;
    return (
      <div>
        <h4>TxIns</h4>
        <p>{transaction.txOut.address}</p>;
      </div>
    )
  }
}