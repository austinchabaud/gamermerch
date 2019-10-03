import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./dux/reducer";
import NavBar from "./components/Navbar";
import MerchList from "./components/MerchList";
// import Details from "./components/Details";
// import Default from "./components/Default";
import "./App.css";
import axios from "axios";
import AuthComponent from "./components/AuthComponent";
import Cart from "./components/Cart/Cart";
import Gamer from "./components/Gamer";
class App extends Component {
  componentDidMount() {
    axios.get("/api/gamerdata").then(res => {
      this.props.setUser(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>
            <nav>
              <NavBar />
            </nav>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={MerchList} />
          <Route path="/login" component={AuthComponent} />
          <Route path="/cart" component={Cart} />
          <Route path="/gamer" component={Gamer} />
          {this.props.user && (
            <>
              <Route
                path="/store"
                render={() => {
                  return <div>Store path</div>;
                }}
              />
              <Route
                path="/gamer"
                render={() => {
                  return <div>Gamer path</div>;
                }}
              />
            </>
          )}
        </Switch>
      </div>
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

export default invokedConnect(withRouter(App));
