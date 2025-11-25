export default {
  testEnvironment: 'node',
  transform: {},
  testMatch: ['**/test/**/*.test.js'],
  collectCoverageFrom: [
    'app/**/*.js',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  verbose: true
};
