module.exports = {
  testEnvironment: "jsdom", // Use jsdom for simulating browser-like environment
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transpile JS and JSX files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Alias for imports starting with "@"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  collectCoverage: true, // Enable coverage collection
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
  coverageReporters: ["html", "text-summary"], // Specify coverage format
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore certain paths for tests
};
