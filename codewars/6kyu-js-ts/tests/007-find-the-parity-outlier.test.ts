import { findOutlier } from "../007-find-the-parity-outlier";

describe("findOutlier", () => {
  it("should return the only odd number from the array of even numbers", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
  });

  it("should return the only even number from the array of odd numbers", () => {
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
  });

  it("should return the only odd number from a mixed array", () => {
    expect(
      findOutlier([
        -71419600, -80089803, 22238568, -12520280, -171802334, -76214782,
        -11909864, -20379688, 31850844,
      ])
    ).toBe(-80089803);
  });

  it("should handle a case with only one odd number", () => {
    expect(findOutlier([1, 3, 5, 7, 9, 2])).toBe(2);
  });

  it("should handle a case with only one even number", () => {
    expect(findOutlier([2, 4, 6, 8, 10, 1])).toBe(1);
  });
});
