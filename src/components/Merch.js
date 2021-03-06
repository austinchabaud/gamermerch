import React, { Component } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import axios from "axios";
import styled from "styled-components";
export default class Merch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: []
    };
  }
  componentDidMount() {
    axios.get("/api/gamermerch").then(res => {
      this.setState({ merch: res.data });
    });
  }
  addToCart = merch => {
    axios
      .post("/api/gamermerch", merch)
      .then(res => console.log("in cart", res.data));
  };
  render() {
    const displayMerch = this.state.merch.map(merch => {
      return (
        <div className="merch-card" key={merch.id}>
          <div className="merch-box">
            <img src={merch.img} />
            <h3>{merch.title}</h3>
            <h2 className="dolla">$ {merch.price}</h2>
            <button className="addCart" onClick={() => this.addToCart(merch)}>
              <i className="fas fa-shopping-cart" />
              Add to Cart
            </button>
            <Link to="/details">
              <button className="merch-details">Details</button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <MerchWrapper>
        <div className="merch-container">{displayMerch}</div>
      </MerchWrapper>
    );
  }
}

const MerchWrapper = styled.div`
  .cardlink {
    text-decoration: none;
    color: var(--mainDark);
  }
  .merch-box {
    height: 20rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    background: var(--mainWhite);
    flex-wrap: wrap;
    border: 0.2rem solid lightgrey;
    border-radius: 0.5rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.9);
  }
  img {
    max-width: 50%;
    max-height: 50%;
    height: 25rem;
    width: 25rem;
    margin: 10px;
  }
  .merch-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    bottom: 10px;
    background: url("https://wallpaperaccess.com/full/682133.jpg");
  }
  .addCart {
    background: var(--mainYellow);
    color: var(--mainDark);
    border: 0.15rem solid lightgrey;
    border-radius: 0.3rem;
  }
  .merch-details {
    background: var(--lightPurple);
    color: var(--mainDark);
    border: 0.15rem solid lightgrey;
    border-radius: 0.3rem;
  }
  .dolla {
    color: limegreen;
  }
`;
