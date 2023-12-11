import { Sum } from "../sum";

test("Sum function should cal sum of 2 numbers", () => {
  const res = Sum(3, 4);
  expect(res).toBe(7);
});
