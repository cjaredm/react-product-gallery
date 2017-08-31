import React, { Component } from "react";
import "./App.css";
import { products, categories } from "./data";
import BannerHead from "./bannerHead/bannerHead";
import ProductGallery from "./store/productGallery/productGallery";

export default class App extends Component {
  state = {
    selectedCategory: 1,
    productID: null,
    minPrice: 0,
    maxPrice: 9999999999
  };

  handleCategoryClick = e => {
    this.setState({ selectedCategory: e.target.id });
  };

  handleFilterButton = () => {
    let min = this.state.minPrice;
    let max = this.state.maxPrice;

    if (this.refs.minPrice.value === "") {
      min = 0;
      this.setState({
        minPrice: min
      });
    } else {
      min = this.refs.minPrice.value;
      this.setState({
        minPrice: this.refs.minPrice.value
      });
    }

    if (this.refs.maxPrice.value === "") {
      max = 9999999999;
      this.setState({
        maxPrice: max
      });
    } else {
      max = this.refs.maxPrice.value;
      this.setState({
        maxPrice: max
      });
    }
  };

  handleProductClick = id => {
    this.setState({ productID: id });
  };

  handleModalClose = () => this.setState({ productID: null });

  render() {
    return (
      <div className="page-wrapper">
        <BannerHead />

        <div className="storeDisplay">
          <div className="sideBar">
            <div className="sideBar__categories">
              <p className="sideBar_label">All Categories</p>
              <ul className="categoryList">
                {categories.map((category, index) =>
                  <li
                    className={
                      (this.state.selectedCategory == category.id &&
                        "categoryList__item selected") ||
                      "categoryList__item"
                    }
                    id={category.id}
                    onClick={this.handleCategoryClick}
                    key={`category_${index}`}
                  >
                    {category.name}
                  </li>
                )}
              </ul>
            </div>

            <div className="sideBar__filterByPrice">
              <p className="sideBar_label">Filter By Price</p>
              <div className="sideBar__filterByPrice_inputs">
                <input
                  type="text"
                  className="sideBar__filterbyPrice_input"
                  ref="minPrice"
                  placeholder="$ Min"
                />
                <input
                  type="text"
                  className="sideBar__filterbyPrice_input"
                  ref="maxPrice"
                  placeholder="$ Max"
                />
                <button
                  className="filterButton"
                  onClick={this.handleFilterButton}
                >
                  Go
                </button>
              </div>
            </div>
          </div>

          <ProductGallery
            selectedCategory={this.state.selectedCategory}
            products={products}
            categories={categories}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            productID={this.state.productID}
            handleProductClick={this.handleProductClick}
            close={this.handleModalClose}
          />
        </div>
      </div>
    );
  }
}
