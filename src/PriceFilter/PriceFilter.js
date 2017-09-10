import React, { Component } from "react";
import "./PriceFilter.css";

export default class PriceFilter extends Component {
  render() {
    return (
      <div className=" sidebar sideBar__filterByPrice">
        <p className="sideBar_label">Filter By Price</p>
        <div className="sideBar__filterByPrice_inputs">
          <input
            type="text"
            className="sideBar__filterbyPrice_input"
            ref="minPrice"
            placeholder="$ Min"
            onChange={this.props.onMinPriceChange}
          />
          <input
            type="text"
            className="sideBar__filterbyPrice_input"
            ref="maxPrice"
            placeholder="$ Max"
            onChange={this.props.onMaxPriceChange}
          />
        </div>
      </div>
    );
  }
}
