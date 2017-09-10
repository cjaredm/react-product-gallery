import React, { Component } from "react";
import "./ProductGallery.css";
import Modal from "./Modal/Modal";

export default class ProductGallery extends Component {
  getSelectedCategoryName = arrayOfCategories =>
    arrayOfCategories
      .filter(category => category.id === this.props.selectedCategory)
      .map(category => category.name);

  filterProductsByCategory = (products, catId) =>
    products.filter(product => product.categoryId === catId);

  filterByPrices = products =>
    products
      .filter(product => product.price >= this.props.minPrice)
      .filter(product => product.price <= this.props.maxPrice);

  renderFilteredProducts = products => {
    return products.map((product, index) => (
      <li
        className="productGallery__list_item"
        onClick={() => this.props.handleProductClick(product.id)}
        key={`product_${index}`}
      >
        <img src={product.images.medium} alt={product.name} />
        <p className="productGallery__list_item__name">{product.name}</p>
        <p className="productGallery__list_item__price">${product.price}</p>
      </li>
    ));
  };

  render() {
    return (
      <div className="productGallery">
        <p className="productGallery_categoryTitle">
          {this.getSelectedCategoryName(this.props.categories)}
        </p>
        <ul className="productGallery__list">
          {this.renderFilteredProducts(
            this.filterByPrices(
              this.filterProductsByCategory(
                this.props.products,
                this.props.selectedCategory
              )
            )
          )}
        </ul>

        {this.props.productID !== null && (
          <Modal
            productID={this.props.productID}
            close={this.props.close}
            products={this.props.products}
          />
        )}
      </div>
    );
  }
}
