module.exports = {
    roots: ['<rootDir>/tests'],
    testTimeout: 1000,
    testRegex: 'tests/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
