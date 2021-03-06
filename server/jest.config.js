/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "testMatch": [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  roots: ["<rootDir>/src"]
};