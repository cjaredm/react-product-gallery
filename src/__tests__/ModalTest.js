import React from "react";
import Modal from "../store/ProductGallery/Modal/Modal";
import { shallow } from "enzyme";

const minProps = {
  productID: 1,
  close: jest.fn(),
  products: []
};

const component = shallow(<Modal 
  productID={minProps.productID} 
  close={minProps.close} 
  products={minProps.products}/>);

test("Modal renders", () => {
  expect(component).toHaveLength(1);
});

test("Exit Modal click runs onClick function", () => {
  const item = component.find('.modal_exit');

  item.simulate('click');
  expect(minProps.close).toHaveBeenCalled();
});