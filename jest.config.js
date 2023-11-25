module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    "^@home/(.*)": "<rootDir>/src/app/home/$1",
    "^@planner/(.*)": "<rootDir>/src/app/planner/$1"
  }
};
