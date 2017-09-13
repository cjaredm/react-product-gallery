import React from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import { shallow } from "enzyme";

const minProps = {
  onMinPriceChange: jest.fn(),
  onMaxPriceChange: jest.fn()
};

const component = shallow(<PriceFilter 
  onMinPriceChange={minProps.onMinPriceChange}
  onMaxPriceChange={minProps.onMaxPriceChange}
/>);

test("PriceFilter renders", () => {
  expect(component).toHaveLength(1);
});

test("Min input allows input", () => {
  const event = { currentTarget: { value: "500" } };

  component
    .find(".sideBar__filterbyPrice_input").at(0)
    .simulate("change", event);

  expect(minProps.onMinPriceChange).toHaveBeenCalled();
  expect(minProps.onMinPriceChange).toHaveBeenCalledWith(event);
});

test("Max input allows input", () => {
  const event = { currentTarget: { value: "60" } };

  component
    .find(".sideBar__filterbyPrice_input").at(1)
    .simulate("change", event);

  expect(minProps.onMaxPriceChange).toHaveBeenCalled();
  expect(minProps.onMaxPriceChange).toHaveBeenCalledWith(event);
});