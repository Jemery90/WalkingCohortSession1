module.exports = {
  roots: ["<rootDir>/test"],
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
