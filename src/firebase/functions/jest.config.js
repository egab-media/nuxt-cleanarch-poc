module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    // "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    // ".*\\.(vue)$": "vue-jest",
  },
  testRegex: "(/__tests__/.spec.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    // '<rootDir>/pages/**/*.vue'
  ],
  // testEnvironment: "jsdom",
};
