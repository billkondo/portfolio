module.exports = {
  testEnvironment: `jsdom`,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  // Allow absolute imports
  moduleDirectories: ['node_modules', '.'],
};
