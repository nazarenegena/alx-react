import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
// getfullyeartest
test("returns current year", () => {
  expect(getFullYear()).toBe(2021);
});
// footercopytest
test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});
// latestnotificationstest
test("returns right notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent Requirement</strong> - complete by EOD"
  );
});
