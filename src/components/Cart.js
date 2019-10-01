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
    this.calculateTotal = this.calculateTotal.bind(this);
  }
  componentDidMount() {
    axios.get("/api/gamermerch").then(res => {
      this.setState({ merchList: res.data });
    });
  }
  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }
  render() {
    return (
      <div>
        <CartComponent />
        <Total total={this.state.total} />
      </div>
    );
  }
}
