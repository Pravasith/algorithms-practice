/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        "@basic/(.*)": [
            "<rootDir>/src/basic_algos/$1"
        ],
        "@ds/(.*)": [
            "<rootDir>/src/data_structures/$1"
        ]
    }
};
