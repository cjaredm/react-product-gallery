import React from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import { shallow } from "enzyme";

const minProps = {
  onMinPriceChange: function(){},
  onMaxPriceChange: function(){}
};

test("PriceFilter renders", () => {
  expect(shallow(<PriceFilter 
  onMinPriceChange={minProps.onMinPriceChange}
  onMinPriceChange={minProps.onMaxPriceChange}
  />)).toHaveLength(1);
});