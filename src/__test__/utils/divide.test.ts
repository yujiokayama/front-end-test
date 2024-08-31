import { divide, ZeroDivisorError } from "utils/divide";

// toThrow
it("0で割るとエラーが発生する", () => {
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
