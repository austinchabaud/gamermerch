import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { setUser } from "../dux/reducer";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
class Navbar extends Component {
  componentDidMount() {
    axios.get("/api/gamerdata").then(res => {
      this.props.setUser(res.data);
    });
  }

  render() {
    return (
      <NavWrapper>
        <nav className="navbar">
          <Link to="/">
            <h4 className="logo">
              <i className="fab fa-twitch" /> Gamer Gear
            </h4>
          </Link>
          <Link to="/cart">
            <button className="cartbutton">
              <span>
                <i className="fas fa-shopping-cart" /> Cart
              </span>
            </button>
          </Link>
          <Link to="/gamer">
            <button className="cartbutton">
              <span>
                <i className="fas fa-user" /> Gamer
              </span>
            </button>
          </Link>
          <Link to="/login">
            <button>
              <span>login</span>
            </button>
          </Link>
          <button
            onClick={() => {
              axios.post("/api/gamerlogout").then(res => {
                alert("Goodbye Gamer");
                this.props.setUser(null);
                this.props.history.push("/");
              });
            }}
          >
            logout
          </button>
        </nav>
      </NavWrapper>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  setUser
};

const invokedConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default invokedConnect(withRouter(Navbar));

const NavWrapper = styled.div`
  .navbar {
    font-family: "Press Start 2P", cursive;
    max-width: 100%;
    width: 100%
    height: 30px;
    margin: 0 auto;
    background: var(--mainPurple);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 12px;
    
  }

  .logo {
    color: var(--mainWhite);
    float: left;
  }

  .logo:hover {
    color: var(--lightPurple);
    transition: 0.5s;
  }

  .cartbutton {
    text-transform: uppercase;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--lightPurple);
    border-radius: 0.5rem;
    color: var(--lightPurple);
    margin-left: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  button{
    background: var(--lightPurple);
    color: var(--mainWhite);
    border: 0.15rem solid lightgrey;
    border-radius: 0.3rem;
  }
  button:hover {
    background: var(--lightPurple);
    color: var(--mainWhite);
  }
`;
