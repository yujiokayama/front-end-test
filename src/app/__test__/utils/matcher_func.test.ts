// toBe
it("1と2を足すと3になる", () => {
  expect(2 + 2).toBe(4);
});

it("文字列のテスト", () => {
  expect("hoge").toBe("hoge");
});

it("Booleanのテスト", () => {
  expect(true).toBe(true);
});

// toEqual
it("配列のテスト", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

it("オブジェクトのテスト", () => {
  expect({ name: "hoge" }).toEqual({ name: "hoge" });
});
