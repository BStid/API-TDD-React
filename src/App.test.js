import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./services/getAllAmiibos");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Nintendo API Calls", () => {
  it("should fetch image and render to screen on mount", done => {
    const wrapper = shallow(<App />);
    setTimeout(() => {
      expect(wrapper.find("Image").length).toEqual(1);
      done();
    });
  });
});
