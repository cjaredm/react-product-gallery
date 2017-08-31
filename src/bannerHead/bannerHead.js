import React, { Component } from "react";
import "./bannerHead.css";

export default class BannerHead extends Component {
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
