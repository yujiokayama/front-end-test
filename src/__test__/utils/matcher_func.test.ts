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
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];

  expect(array1).toEqual(array2);
});

it("オブジェクトのテスト", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };

  expect(obj1).toEqual(obj2);
});

// not
it("3+3は7ではないnotを使ったテスト", () => {
  expect(3 + 3).not.toBe(7);
});
