import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import { shallow } from "enzyme";

const minProps = {
  categories: [],
  handleCategoryClick: jest.fn(),
  onMinPriceChange: jest.fn(),
  onMaxPriceChange: jest.fn()
};

const component = shallow(<CategoryList 
  categories={minProps.categories}
  handleCategoryClick={minProps.handleCategoryClick}
  onMinPriceChange={minProps.onMinPriceChange}
  onMaxPriceChange={minProps.onMaxPriceChange}
  />);

test("CategoryList renders", () => {
  expect(component).toHaveLength(1);
});

test("Category click runs onClick function", () => {
  const item = component.find('.categoryList__item').first();

  item.simulate('click');
  expect(minProps.handleCategoryClick).toHaveBeenCalled();
});