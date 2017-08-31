import React, { Component } from "react";
import "./App.css";
import { products, categories } from "./data";

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

          <div className="productGallery">
            <p className="productGallery_categoryTitle">
              {categories[this.state.selectedCategory - 1]["name"]}
            </p>
            <ul className="productGallery__list">
              {products
                .filter(
                  product => product.categoryId == this.state.selectedCategory
                )
                .filter(product => product.price >= this.state.minPrice)
                .filter(product => this.state.maxPrice >= product.price)
                .map((product, index) =>
                  <li
                    className="productGallery__list_item"
                    onClick={() => this.handleProductClick(product.id)}
                    key={`product_${index}`}
                  >
                    <img src={product.images.medium} alt={product.name} />
                    <p className="productGallery__list_item__name">
                      {product.name}
                    </p>
                    <p className="productGallery__list_item__price">
                      ${product.price}
                    </p>
                  </li>
                )}
            </ul>
          </div>
        </div>
        {this.state.productID !== null &&
          <div className="modal">
            <div className="modal_box">
              <span className="modal_exit" onClick={this.handleModalClose}>
                &times;
              </span>

              <img
                className="modal_img"
                src={products
                  .filter(product => product.id == this.state.productID)
                  .map(product => product.images.large)}
                alt="something"
              />
              <div className="modal_info">
                <p className="modal_name">
                  {products
                    .filter(product => product.id == this.state.productID)
                    .map(product => product.name)}
                </p>
                <p className="modal_price">
                  ${products
                    .filter(product => product.id == this.state.productID)
                    .map(product => product.price)}
                </p>
                <p className="modal_description">
                  {products
                    .filter(product => product.id == this.state.productID)
                    .map(product => product.description)}
                </p>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}
