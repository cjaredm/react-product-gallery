import React, { Component } from "react";
import "./modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal_box">
          <span className="modal_exit" onClick={this.props.close}>
            &times;
          </span>

          <img
            className="modal_img"
            src={this.props.products
              .filter(product => product.id == this.props.productID)
              .map(product => product.images.large)}
            alt="something"
          />
          <div className="modal_info">
            <p className="modal_name">
              {this.props.products
                .filter(product => product.id == this.props.productID)
                .map(product => product.name)}
            </p>
            <p className="modal_price">
              ${this.props.products
                .filter(product => product.id == this.props.productID)
                .map(product => product.price)}
            </p>
            <p className="modal_description">
              {this.props.products
                .filter(product => product.id == this.props.productID)
                .map(product => product.description)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
