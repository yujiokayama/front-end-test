import { sum, multiply } from "@/utils/calc";

// describe("足し算", () => {
//   it("1と2を足すと3になる", () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

// describe("掛け算", () => {
//   it("2と3をかけると6になる", () => {
//     expect(multiply(2, 3)).toBe(6);
//   });
// });

// パラメタライズドテスト
it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("sum($a, $b)は$expectedを返す", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
