const { arrayDiff } = require("../src/index");

describe("arrayDiff", () => {
  test("it should return an empty array if the first array is empty (nothing to subtract from)", () => {
    expect(arrayDiff([], [1,2])).toStrictEqual([]);
  });

  test("it should return the first array if the second array is empty", () => {
    expect(arrayDiff([1, 2], [])).toStrictEqual([1, 2]);
  });

  test("it should return [2] for an input of [1,2] and [1]", () => {
    expect(arrayDiff([1, 2], [1])).toStrictEqual([2]);
  });

  test("it should return [2,2] for an input of [1,2,2] and [1]", () => {
    expect(arrayDiff([1, 2, 2], [1])).toStrictEqual([2,2]);
  });

  test("it should return [1] for an input of [1,2,2] and [2]", () => {
    expect(arrayDiff([1, 2, 2], [2])).toStrictEqual([1]);
  });
});
