import {foo, bar} from "./index.js";

test("foo", () => {
  expect(foo).toEqual("foo");
  expect(bar).toEqual("bar");
});
