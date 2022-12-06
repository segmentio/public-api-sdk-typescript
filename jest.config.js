const config = {
    roots: ['<rootDir>/tests'],
    testTimeout: 1000,
    testMatch: ['**/?(*.)+(test).ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    cacheDirectory: './node_modules/.cache/jest',
    verbose: true,
    silent: false,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    clearMocks: true,
    reporters: ['default'],
    testLocationInResults: true,
    forceExit: true,
    detectOpenHandles: true,
    cache: false,
};

module.exports = config;
