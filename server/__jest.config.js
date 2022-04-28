/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
   "**/*.ts",
   "!**/node_modules/**",
  ],
  coverageDirectory: 'coverage_dir',
  coverageReporters: ["html"],
  
  "testMatch": [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
