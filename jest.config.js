module.exports = {
    roots: ['<rootDir>/tests'],
    testTimeout: 1000,
    testRegex: '(.*)test\\.(js|jsx?|tsx?)$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    cacheDirectory: './node_modules/.cache/jest',
    verbose: true,
    silent: false,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
