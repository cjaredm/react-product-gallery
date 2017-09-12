import React, { Component } from "react";
import "./App.css";
import { products, categories } from "./data";
import BannerHead from "./BannerHead/BannerHead";
import CategoryList from "./CategoryList/CategoryList";
import ProductGallery from "./store/ProductGallery/ProductGallery";

export default class App extends Component {
  state = {
    selectedCategory: categories[0].id,
    productID: null,
    minPrice: 0,
    maxPrice: 9999999999,
    searchInput: "",
    productList: products
  };

  searchFilter = e => {

    //Controlled and Uncontrolled things. But it seems pointless to update this as I can take it out and it will still do my search filter effectively.. Why do it?
    this.setState({ searchInput: e.currentTarget.value });

    let productList = products.filter(product => product.name.toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1);
    
    this.setState({productList: productList});
  };

  handleCategoryClick = e => {
    this.setState({
      selectedCategory: Number(e.target.id)
    });
  };

  handleMinPriceChange = e => {
    if (e.currentTarget.value === "") {
      this.setState({ minPrice: 0 });
    } else {
      this.setState({ minPrice: e.currentTarget.value });
    }
  };

  handleMaxPriceChange = e => {
    if (e.currentTarget.value === "") {
      this.setState({ maxPrice: 9999999999 });
    } else {
      this.setState({ maxPrice: e.currentTarget.value });
    }
  };

  handleProductClick = id => this.setState({ productID: Number(id) });

  handleModalClose = () => this.setState({ productID: null });

  render() {
    return (
      <div className="page-wrapper">
        <BannerHead
          searchFilter={this.searchFilter}
          searchInput={this.state.searchInput}
        />

        <div className="storeDisplay">
          <CategoryList
            categories={categories}
            handleCategoryClick={this.handleCategoryClick}
            handleFilterButton={this.handleFilterButton}
            onMinPriceChange={this.handleMinPriceChange}
            onMaxPriceChange={this.handleMaxPriceChange}
          />

          <ProductGallery
            getCategoryName={this.getCategoryName}
            selectedCategory={this.state.selectedCategory}
            products={this.state.productList}
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
