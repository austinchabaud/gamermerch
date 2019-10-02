import React, { Component } from "react";
import CartComponent from "./CartComponent";
import axios from "axios";
import Total from "./Total";
import Merch from "./Merch";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      merchList: ""
    };
  }

  render() {
    return (
      <div>
        <CartComponent />
        <Total />
      </div>
    );
  }
}
