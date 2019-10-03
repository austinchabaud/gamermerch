import React, { Component } from "react";
import "./Cart.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

toast.configure();
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
  removeFromCart(id) {
    axios.delete(`/api/removeitem/${id}`).then(res => {
      this.setState({ cart: res.data });
    });
  }
  render() {
    async function handleToken(token, addresses) {
      // console.log({ token, addresses });
      const response = await axios.post("/checkout", { token, cart });
      const { status } = response.data;
      if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
      } else {
        toast("Something went wrong", { type: "error" });
      }
    }
    const cart = this.state;
    const displayCart = this.state.cart.map(cart => {
      return (
        <div>
          <div>{() => this.addToCart(cart)}</div>
          <div className="cartitems">
            <img className="cartimg" src={cart.img} />
            <h2>{cart.title}</h2>
            <span>
              <h3>${cart.price}</h3>
            </span>
            <button onClick={() => this.removeFromCart(cart.id)}>remove</button>
            <div>{cart.info}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="cartdisplay">
        {this.state.cart.length ? displayCart : <h3>No items in cart</h3>}
        <div className="stripe">
          <StripeCheckout
            stripeKey="pk_test_J6nNyWaBcfe70Hfbaalw3q0p00AYKSKopP"
            token={handleToken}
          />
        </div>
      </div>
    );
  }
}
