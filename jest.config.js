module.exports = {
  moduleNameMapper: {
    // "^@/(.*)$": "<rootDir>/$1",
    // "^~/(.*)$": "<rootDir>/$1",
    '^@@/(?!node_modules)(.*)$': '<rootDir>/$1',
    '^~~/(?!node_modules)(.*)$': '<rootDir>/src/$1',
    '^@modules/(.*)': '<rootDir>/src/modules/$1',
    '^@shared/(.*)': '<rootDir>/src/shared/$1',
    '^@ui/(.*)': '<rootDir>/src/ui/$1',

    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  testRegex: '(/__tests__/.spec.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue'
    // '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jsdom'
}
