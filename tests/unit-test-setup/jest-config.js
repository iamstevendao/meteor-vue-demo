module.exports = {
  'rootDir': './../../',
  'roots': [
    '<rootDir>/imports/'
  ],
  // 'coveragePathIgnorePatterns': [
  //   '<rootDir>/tests/',
  //   // collection definitions ignored from unit test coverage, no logic
  //   '<rootDir>/src/imports/modules/[a-zA-Z-]+/shared/collections/'
  // ],
  // 'testURL': 'http://www.meteor-vue-app.com',
  'setupFiles': ['<rootDir>/tests/unit-test-setup/setup-tests.js'],
  'verbose': true,
  // 'collectCoverage': true,
  // 'collectCoverageFrom': ['src/**/*', '!src/**/*-fixture.js'],
  // 'coverageDirectory': '<rootDir>/tests/coverage/unit-tests/',
  'moduleFileExtensions': [
    'js',
    'vue'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'jest-vue-preprocessor'
  },
  'moduleNameMapper': {
    '^meteor/(.*)': '<rootDir>/tests/unit-test-setup/meteor-mocks/$1.js',
    '^[/](.*)': '<rootDir>/$1',
    "\\.(css|scss)$": "<rootDir>/tests/style/styleMock.js"
  },
  'coverageThreshold': {
    'global': {
      'branches': 70,
      'functions': 85,
      'lines': 85,
      'statements': 85
    }
  },
  // 'testResultsProcessor': './node_modules/jest-junit'
};
