import { sum, mult } from "../calculator.js";

it("should return sum of two numbers", () => {
  const resultSum = sum(5, 2);

  expect(resultSum).toEqual(7);
});

it("should return sum of two numbers", () => {
  const resultSum = sum(10, 15);

  expect(resultSum).toEqual(25);
});

it("should return mult of two numbers", () => {
  const resultMult = mult(5, 2);

  expect(resultMult).toEqual(10);
});

it("should return mult of two numbers", () => {
  const resultMult = mult(10, 15);

  expect(resultMult).toEqual(150);
});
