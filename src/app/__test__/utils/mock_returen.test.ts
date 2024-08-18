it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();

  mockFunc.mockReturnValue("mocked value");
  expect(mockFunc()).toBe("mocked value");
});

it("モック関数に戻り値を一度だけ設定する", () => {
  const mockFunc = jest.fn();

  mockFunc.mockReturnValueOnce("mocked value");
  expect(mockFunc()).toBe("mocked value");
  expect(mockFunc()).toBeUndefined();
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();

  mockFunc.mockResolvedValue("mocked value");
  expect(await mockFunc()).toBe("mocked value");
});




