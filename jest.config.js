/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  // testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/app/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
