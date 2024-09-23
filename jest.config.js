module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/__tests__/**/*.(ts|js)", "**/?(*.)+(spec|test).(ts|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transformar archivos TypeScript usando ts-jest
  },
};
