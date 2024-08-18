import * as mockSpy from "@/utils/mock_spy";

it("sum関数が呼び出されるか", () => {
  const spy = jest.spyOn(mockSpy, "sum");

  mockSpy.sum(1, 2);

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1, 2);

  spy.mockRestore(); // mockを元に戻す
});
