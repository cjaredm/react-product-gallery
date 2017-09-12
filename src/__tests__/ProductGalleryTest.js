import React from "react";
import ProductGallery from "../store/ProductGallery/ProductGallery";
import { shallow } from "enzyme";

const minProps = {
  getCategoryName: jest.fn(),
  selectedCategory: jest.fn(),
  products: [],
  categories: [],
  minPrice: 0,
  maxPrice: 999999999,
  productID: 1,
  handleProductClick: jest.fn(),
  close: jest.fn(),
};

const component = shallow(<ProductGallery 
  products={minProps.products}
  categories={minProps.categories}
  productID={minProps.productID}
  handleProductClick={minProps.handleProductClick}
  close={minProps.close}
  />);

test("ProductGallery renders", () => {
  expect(component).toHaveLength(1);
});

test("Product click runs onClick function", () => {
  const item = component.find('.productGallery__list_item').first();

  item.simulate('click');
  expect(minProps.handleProductClick).toHaveBeenCalled();
});
