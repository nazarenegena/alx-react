import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseACtionTypes";

describe("component tests for uiReducer", () => {
  const defaultState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("component should return initial state when no action is passed", () => {
    expect(uiReducer(defaultState, "null")).toEqual(defaultState);
  });

  it("function should return initial state when wrong action is passed", () => {
    expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(
      defaultState
    );
  });

  it("function should change state correctly when action is passed", () => {
    expect(
      uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER })
    ).toEqual({ ...defaultState, isNotificationDrawerVisible: true });
  });
});
