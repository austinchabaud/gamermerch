import React, { Component } from "react";
import "./Cart.scss";
import axios from "axios";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(res => {
      this.setState({ cart: res.data ? res.data : [] });
    });
  }
  render() {
    const displayCart = this.state.cart.map(cart => {
      return (
        <div>
          <div>{() => this.addToCart(cart)}</div>
          <div className="cartitems">
            <img src={cart.img} />
            <h2>{cart.title}</h2>
            <span>
              <h3>${cart.price}</h3>
            </span>
            <div>{cart.info}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="cartdisplay">
        {this.state.cart.length ? displayCart : "No items in cart"}
      </div>
    );
  }
}
