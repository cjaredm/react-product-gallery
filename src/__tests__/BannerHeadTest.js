import React from "react";
import BannerHead from "../BannerHead/BannerHead";
import { shallow } from "enzyme";

const minProps = {

};

test("BannerHead renders", () => {
  expect(shallow(<BannerHead />)).toHaveLength(1);
});

test("Search bar allows input", () => {
  const searchFilter = jest.fn();
  const event = { currentTarget: { value: "whatever" } };

  shallow(<BannerHead searchInput={""} searchFilter={searchFilter} />)
    .find(".searchBar")
    .simulate("change", event);

  expect(searchFilter).toHaveBeenCalled();
  expect(searchFilter).toHaveBeenCalledWith(event);
});
