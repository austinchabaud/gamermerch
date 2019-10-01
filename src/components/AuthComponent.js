import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../dux/reducer";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      register: true
    };
  }

  async register() {
    const { email, username, password } = this.state;
    const registeredGamer = await axios.post("/api/gamerregister", {
      email,
      username,
      password
    });
    this.props.setUser(registeredGamer.data);
  }

  async login() {
    const { email, password } = this.state;
    const loggedInGamer = await axios.post("/api/gamerlogin", {
      email,
      password
    });
    this.props.setUser(loggedInGamer.data);
  }

  render() {
    const { email, username, password, register } = this.state;
    return (
      <AuthWrapper>
        <div className="auth-container">
          {this.props.user ? (
            <Redirect to="/" />
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                if (this.state.register) {
                  this.register();
                } else {
                  this.login();
                }
              }}
            >
              <input
                placeholder="email"
                value={email}
                onChange={e =>
                  this.setState({
                    email: e.target.value
                  })
                }
              />
              <input
                placeholder="password"
                value={password}
                onChange={e =>
                  this.setState({
                    password: e.target.value
                  })
                }
              />
              {register && (
                <input
                  placeholder="username"
                  value={username}
                  onChange={e =>
                    this.setState({
                      username: e.target.value
                    })
                  }
                />
              )}
              <button>{register ? "Register" : "Login"}</button>
            </form>
          )}
          <div>
            <button
              className="register-button"
              onClick={() =>
                this.setState({
                  register: true
                })
              }
            >
              Register
            </button>
            Already have an account ?
            <button
              onClick={() => {
                this.setState({
                  register: false
                });
              }}
            >
              Login
            </button>
          </div>
        </div>
      </AuthWrapper>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  setUser
};

const authEnhancingFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default authEnhancingFunction(AuthComponent);

const AuthWrapper = styled.div`
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
    form {
      display: flex;
      flex-direction: column;
      max-width: 500px;
    }
  }
  button {
    background: var(--lightPurple);
    color: var(--mainWhite);
    border: 0.15rem solid lightgrey;
    border-radius: 0.3rem;
  }
`;
