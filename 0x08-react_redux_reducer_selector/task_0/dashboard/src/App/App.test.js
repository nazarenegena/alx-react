/**
 * the jsdom @jest-environment
 */
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("function rendering components", () => {
  it("Component renders App component without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it("Field contains Notifications component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("wrapper contains Header component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("wrapper contains Login component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("wrapper contains Footer component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("component checks CourseList is not rendered", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("component when isLogged in is true", () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ user: { isLoggedIn: true } });

  it("component checks Login is not rendered", () => {
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("component checks CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it("component checks that logIn updates state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: "foo",
        password: "bar",
        isLoggedIn: true,
      },
    });
    expect(wrapper.state().user.email).toBe("foo");
    expect(wrapper.state().user.password).toBe("bar");
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it("component verifies that the logOut function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: "foo",
        password: "bar",
        isLoggedIn: true,
      },
    });
    wrapper.state().logOut();
    expect(wrapper.state().user.email).toBe("");
    expect(wrapper.state().user.password).toBe("");
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });
});

describe("when Ctrl+h pressed", () => {
  window.alert = jest.fn();
  it("checks alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('component checks alert string is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  window.alert.mockClear();
});

describe("testing state of App.js", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(<App />);

    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("component should set displayDrawer to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("should set displayDrawer to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

describe("markNotificationAsRead works as intended", () => {
  it("should update array in state", () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ],
    });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 2, type: "urgent", value: "New resume available" },
    ]);
    expect(wrapper.state().listNotifications).toHaveLength(1);
  });
});
