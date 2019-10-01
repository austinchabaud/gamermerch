import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      merch: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get("/api/gamermerch").then(res => {
      this.setState({ merch: res.data });
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  render() {
    let _merch = this.state.merch;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _merch = _merch.filter(function(merch) {
        return merch.title.toLowerCase().match(search);
      });
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          ref="search"
          onChange={this.handleChange}
          placeholder="search for merch..."
        />
      </div>
    );
  }
}

export default Search;
