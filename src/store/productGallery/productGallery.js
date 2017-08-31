import React, { Component } from "react";
import "./productGallery.css";
import Modal from "./modal/modal";

export default class ProductGallery extends Component {
  render() {
    return (
      <div className="productGallery">
        <p className="productGallery_categoryTitle">
          {this.props.categories[this.props.selectedCategory - 1]["name"]}
        </p>
        <ul className="productGallery__list">
          {this.props.products
            .filter(
              product => product.categoryId == this.props.selectedCategory
            )
            .filter(product => product.price >= this.props.minPrice)
            .filter(product => this.props.maxPrice >= product.price)
            .map((product, index) =>
              <li
                className="productGallery__list_item"
                onClick={() => this.props.handleProductClick(product.id)}
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
        {this.props.productID !== null &&
          <Modal
            productID={this.props.productID}
            close={this.props.close}
            products={this.props.products}
          />}
      </div>
    );
  }
}
