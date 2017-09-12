import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import { shallow } from "enzyme";

const minProps = {
  categories: [],
  handleCategoryClick: function(){},
  handleFilterButton: function(){},
  onMinPriceChange: function(){},
  onMaxPriceChange: function(){}
};

test("CategoryList renders", () => {
  expect(shallow(<CategoryList 
  categories={minProps.categories}
  handleCategoryClick={minProps.handleCategoryClick}
  handleFilterButton={minProps.handleFilterButton}
  onMinPriceChange={minProps.onMinPriceChange}
  onMaxPriceChange={minProps.onMaxPriceChange}
  />)).toHaveLength(1);
});