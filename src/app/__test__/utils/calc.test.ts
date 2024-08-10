// import { sum, multiply } from "../../utils/calc";
import { sum, multiply } from "@/utils/calc";

describe("calc", () => {
  it("1と2を足すと3になる", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("calc", () => {
  it("2と3をかけると6になる", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
