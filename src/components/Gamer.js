import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Gamer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      username: ""
    };
  }
  componentDidMount() {
    axios.get("/api/username").then(res => {
      this.setState({ username: res.data });
    });
  }
  render() {
    return (
      <ProfileWrapper>
        <div className="user-container">
          <div className="user-image">
            <img src="https://res.cloudinary.com/dbhzcqzuh/image/upload/v1569609978/gamemerch/gamemerch_twitchdefault_abmrjl-Circle_lfcrl3.png" />
          </div>
          <div className="name">{this.props.user.username}</div>
        </div>
      </ProfileWrapper>
    );
  }
}
function mapStateToProps(reduxState) {
  return reduxState;
}

const gamerRedduxConnection = connect(mapStateToProps);

export default gamerRedduxConnection(Gamer);

const ProfileWrapper = styled.div`
  .user-container {
    max-heigth: 60%;
    max-width: 60%;
    height: 30rem;
    width: 20rem;
    border: 4px solid var(--mainPurple);
    background: var(--lightPurple);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 4rem;
  }
  img {
    max-height: 40%;
    max-width: 40%;
    border-radius: 50%;
  }
  .user-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-family: "Press Start 2P", cursive;
  }
`;
