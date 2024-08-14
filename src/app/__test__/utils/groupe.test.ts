describe("配列に関するテスト", () => {
  it("配列に要素が追加できる", () => {
    const array = [];
    array.push("test");
    expect(array).toEqual(["test"]);
  });

  it("配列の長さが正しい", () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
  });

  describe("配列の検索に関するテスト", () => {
    it("配列にhogeが含まれているか", () => {
        const array = ["hoge", "fuga", "piyo"];
        expect(array).toContain("hoge");
    });
  });
});
