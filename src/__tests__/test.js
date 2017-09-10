import React from "react";
import BannerHead from "../bannerHead/bannerHead";
import { shallow } from "enzyme";

const minProps = {};

test("BannerHead renders", () => {
  expect(shallow(<BannerHead />)).toHaveLength(1);
});

test("Search bar allows input", () => {
  const onSearchChange = jest.fn();
  const event = { currentTarget: { value: "whatever" } };

  shallow(<BannerHead searchInput={""} onSearchChange={onSearchChange} />)
    .find(".searchBar")
    .simulate("change", event);

  expect(onSearchChange).toHaveBeenCalled();
  expect(onSearchChange).toHaveBeenCalledWith(event);
});
