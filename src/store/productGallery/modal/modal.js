import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  getSelectedProduct = products =>
    products.filter(product => product.id === this.props.productID);

  getProductImg = products => products.map(product => product.images.large);
  getProductName = products => products.map(product => product.name);
  getProductPrice = products => products.map(product => product.price);
  getProductDescription = products =>
    products.map(product => product.description);

  render() {
    return (
      <div className="modal">
        <div className="modal_box">
          <span className="modal_exit" onClick={this.props.close}>
            &times;
          </span>

          <img
            className="modal_img"
            src={this.getProductImg(
              this.getSelectedProduct(this.props.products)
            )}
            alt="Product"
          />
          <div className="modal_info">
            <p className="modal_name">
              {this.getProductName(
                this.getSelectedProduct(this.props.products)
              )}
            </p>
            <p className="modal_price">
              ${this.getProductPrice(
                this.getSelectedProduct(this.props.products)
              )}
            </p>
            <p className="modal_description">
              {this.getProductDescription(
                this.getSelectedProduct(this.props.products)
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
