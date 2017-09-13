import React from "react";
import ProductGallery from "../store/ProductGallery/ProductGallery";
import { shallow } from "enzyme";

const minProps = {
  selectedCategory: 1,
  products: [{
    categoryId: 1,
    description: "The Handcrafted Robot is handmade for emulation. Eligendi omnis quisquam quisquam. Nihil dolor voluptatibus velit nobis culpa. Eos reprehenderit in nisi et qui. Odio et inventore eligendi in.",
    id: 1,
    images: 
    {medium: "https://robohash.org/1?size=175x175&set=set1", large: "https://robohash.org/1?size=390x390&set=set1"},
    name: "Handcrafted Robot",
    price: 58.33
    },
    {
      categoryId: 1,
      description: "The Handcrafted Robot is handmade for emulation. Eligendi omnis quisquam quisquam. Nihil dolor voluptatibus velit nobis culpa. Eos reprehenderit in nisi et qui. Odio et inventore eligendi in.",
      id: 1,
      images: 
      {medium: "https://robohash.org/1?size=175x175&set=set1", large: "https://robohash.org/1?size=390x390&set=set1"},
      name: "Handcrafted Robot",
      price: 58.33
      },
      {
        categoryId: 1,
        description: "The Handcrafted Robot is handmade for emulation. Eligendi omnis quisquam quisquam. Nihil dolor voluptatibus velit nobis culpa. Eos reprehenderit in nisi et qui. Odio et inventore eligendi in.",
        id: 1,
        images: 
        {medium: "https://robohash.org/1?size=175x175&set=set1", large: "https://robohash.org/1?size=390x390&set=set1"},
        name: "Handcrafted Robot",
        price: 58.33
        }],
  categories: [{name: "One", id: "1"}, {name: "Two", id: "2"}, {name: "Three", id: "3"}, {name: "Four", id: "4"}],
  minPrice: 0,
  maxPrice: 999999999,
  productID: null,
  handleProductClick: jest.fn(),
  close: jest.fn()
};

const component = shallow(<ProductGallery 
selectedCategory={minProps.selectedCategory}
  products={minProps.products}
  categories={minProps.categories}
  productID={minProps.productID}
  handleProductClick={minProps.handleProductClick}
  close={minProps.close}
  minPrice={minProps.minPrice}
  maxPrice={minProps.maxPrice}
  />);

test("ProductGallery renders", () => {
  expect(component).toHaveLength(1);
});

test("Product click runs onClick function", () => {
  const item = component.find('.productGallery__list_item').at(1);

  item.simulate('click');
  expect(minProps.handleProductClick).toBeCalled();
});
