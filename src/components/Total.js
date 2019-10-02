import React, { Component } from "react";

export default class Total extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>
          <span> Subtotal:</span>
          <h3> $</h3>
        </h3>
        <h3>
          <span> Tax (9%)</span>
          <span> </span>
        </h3>
        <h3>
          <span> Total:</span>
          <span> </span>
        </h3>
      </div>
    );
  }
}
