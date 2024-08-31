import { delay } from "utils/async_func";

it("delay関数のテスト", async () => {
  const result = await delay("test", 1000);
  expect(result).toBe("test");
});

it("エラーのテスト", async () => {
  try {
    const result = await delay("test", -1);
  } catch (e) {
    expect(e).toEqual(new Error("timeは0以上で指定してください"));
  }
});
