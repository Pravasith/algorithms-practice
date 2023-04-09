/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        "@algorithms/(.*)": [
            "<rootDir>/src/algorithms/$1"
        ],
        "@problems/(.*)": [
            "<rootDir>/src/problems/$1"
        ],
        "@data-structures/(.*)": [
            "<rootDir>/src/data_structures/$1"
        ]
    }
};
