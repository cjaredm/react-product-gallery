import React from "react";
import Modal from "../store/ProductGallery/Modal/Modal";
import { shallow } from "enzyme";

const minProps = {
  productID: 1,
  close: function(){},
  products: []
};

test("Modal renders", () => {
  expect(shallow(<Modal 
  productID={minProps.productID} 
  close={minProps.close} 
  products={minProps.products}/>))
  .toHaveLength(1);
});