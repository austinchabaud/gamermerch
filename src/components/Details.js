import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  componentDidMount() {
    axios.get("/api/details").then(res => {
      this.setState({ details: res.data });
    });
  }

  render() {
    return (
      <div>
        <h3> details</h3>
      </div>
    );
  }
}
