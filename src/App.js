import React, { Component } from "react";
import "./App.css";
import { products, categories } from "./data";

export default class App extends Component {
  state = {
    selectedCategory: 1,
    productIndex: null
  };

  handleCategoryClick = e => {
    this.setState({ selectedCategory: e.target.id });
  };

  handleProductClick = index => {
    this.setState({ productIndex: index });
  };

  handleModalClose = () => this.setState({ productIndex: null });

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
                  placeholder="$ Min"
                />
                <input
                  type="text"
                  className="sideBar__filterbyPrice_input"
                  placeholder="$ Max"
                />
                <button className="filterButton">Go</button>
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
                .map((product, index) =>
                  <li
                    className="productGallery__list_item"
                    onClick={() => this.handleProductClick(index)}
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
        {this.state.productIndex !== null &&
          <div className="modal">
            <div className="modal_box">
              <span className="modal_exit" onClick={this.handleModalClose}>
                &times;
              </span>
              <img
                className="modal_img"
                src={products[this.state.productIndex]["images"]["large"]}
                alt="something"
              />
              <div className="modal_info">
                <p className="modal_name">
                  {products[this.state.productIndex]["name"]}
                </p>
                <p className="modal_price">
                  ${products[this.state.productIndex]["price"]}
                </p>
                <p className="modal_description">
                  {products[this.state.productIndex]["description"]}
                </p>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}
