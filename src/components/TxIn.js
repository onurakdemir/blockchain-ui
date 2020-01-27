import React from "react";
import PropTypes from "prop-types";
import "normalize.css";

export default class TxIn extends React.Component {
  static propTypes = {
    txOutId: PropTypes.string,
    txOutIndex: PropTypes.number,
    signature: PropTypes.string,
  };

  render() {
    const txIn = this.props.txIn;
    return (
      <div class="card">
        <div class="card-body">
          <p>ID       : {txIn.txOutId} </p>
          <p>INDEX    : {txIn.txOutIndex}</p>
          <p>SIGNATURE: {txIn.signature}}</p>
        </div>
      </div>
    );
  }
}