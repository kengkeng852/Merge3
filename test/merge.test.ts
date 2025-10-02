import { merge } from "../src/merge";

test("merge three sorted arrays", () => {
  const c1 = [1, 4, 7];
  const c2 = [9, 6, 2]; // from max to min
  const c3 = [3, 5, 8];

  const result = merge(c1, c2, c3);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("merge three sorted arrays", () => {
  const c1 = [11, 22, 77];
  const c2 = [99, 66, 33]; // from max to min
  const c3 = [44, 55, 88];

  const result = merge(c1, c2, c3);
  expect(result).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
});
