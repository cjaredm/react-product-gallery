import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BannerHead.css";

export default class BannerHead extends Component {
  static propTypes = {
    searchInput: PropTypes.string,
    searchFilter: PropTypes.func
  };

  render() {
    return (
      <div className="bannerWrapper">
        <div className="purpleBar" />
        <div className="bannerHead">
          <div className="flexColumn">
            <h1>Amazing</h1>
            <h1>Store</h1>
          </div>
          <div className="flexColumn">
            <input
              value={this.props.searchInput}
              onChange={this.props.searchFilter}
              type="text"
              className="searchBar"
              placeholder="Search products by name"
            />
          </div>
        </div>
      </div>
    );
  }
}
