const { arrayDiff } = require("../src/index");

describe("arrayDiff", () => {
  test("it should return an empty array if the first array is empty (nothing to subtract from)", () => {
    expect(arrayDiff([], [1,2])).toStrictEqual([]);
  });
});
