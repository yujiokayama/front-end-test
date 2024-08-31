import fs from "fs";
import { readFile } from "utils/mock_module";

jest.mock("fs");

const mockedFs = jest.mocked(fs);

mockedFs.readFileSync.mockReturnValue("Hello, World!");

it("readFileがデータを返却するか", () => {
  const data = readFile("path/dummy.txt");

  expect(data).toBe("Hello, World!");
  expect(mockedFs.readFileSync).toHaveBeenCalled();
});
