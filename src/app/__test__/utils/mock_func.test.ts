it("first_mock", () => {
  const mockFunc = jest.fn(() => "I am a mock function");

  expect(mockFunc()).toBe("I am a mock function");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn();

  mockFunc.mockImplementation(() => "I am a mock function");

  expect(mockFunc()).toBe("I am a mock function");
});
