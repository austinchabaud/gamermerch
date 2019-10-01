import React, { Component } from "react";
import axios from "axios";

class CartController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    axios.get("/api/gamermerch").then(res => {
      this.setState({ merch: res.data });
    });
  }

  add = () => {
    this.setState({ qty: this.state.qty + 1 });
    this.props.handleTotal(this.props.price);
  };

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    return (
      <div>
        <div className="title">
          <h4>
            {this.props.title}: ${this.props.price}
          </h4>
        </div>
        <div className="quantity"> qty: {this.state.qty}</div>
        <button className="showinfo" onClick={this.showInfo}>
          show info
        </button>
        <button className="addone" onClick={this.add}>
          +
        </button>
        <button className="subone" onClick={this.subtract}>
          -
        </button>
      </div>
    );
  }
}

export default CartController;
