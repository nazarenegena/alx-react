import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import CourseList from "./CourseList";
import { shallow } from "enzyme";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("wrappers rendering CourseList component", () => {
  it("wrapper renders Courselist component without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("function renders 5 different rows", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    expect(wrapper.find("tbody").children()).toHaveLength(3);
  });
});
