const { arrayDiff } = require("../src/index");

describe("arrayDiff", () => {
  test("it should return an empty array if the first array is empty (nothing to subtract from)", () => {
    expect(arrayDiff([], [1,2])).toStrictEqual([]);
  });

  test("it should return the first array if the second array is empty", () => {
    expect(arrayDiff([1, 2], [])).toStrictEqual([1, 2]);
  });
});
