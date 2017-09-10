import React, { Component } from "react";
import "./CategoryList.css";
import PriceFilter from "../PriceFilter/PriceFilter";

export default class CategoryList extends Component {
  render() {
    return (
      <div className="sideBar">
        <div className="sideBar__categories">
          <p className="sideBar_label">All Categories</p>
          <ul className="categoryList">
            {this.props.categories.map((category, index) => (
              <li
                className={
                  (this.props.selectedCategory === category.id &&
                    "categoryList__item selected") ||
                  "categoryList__item"
                }
                id={category.id}
                onClick={this.props.handleCategoryClick}
                key={`category_${index}`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <PriceFilter
          onMinPriceChange={this.props.onMinPriceChange}
          onMaxPriceChange={this.props.onMaxPriceChange}
        />
      </div>
    );
  }
}
