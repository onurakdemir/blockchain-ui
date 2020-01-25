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
      <div>
      </div>
    );
  }
}