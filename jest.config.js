const path = require('path')

module.exports = {
    rootDir: path.resolve(__dirname),
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    // 别名设置
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/lib/$1',
        '\\.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__tests__/__mocks__/fileMock.ts',
        '\\.(sass|s?css|less)$': '<rootDir>/__tests__/__mocks__/styleMock.ts',
        '\\?worker$': '<rootDir>/__tests__/__mocks__/workerMock.ts'
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // 测试文件
    testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx|js)'],
    testPathIgnorePatterns: ['/node_modules/'],

    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(ts|js|jsx|tsx)$': [
            'babel-jest',
            {
                presets: [
                    ['@babel/preset-env', {targets: {node: 'current'}}],
                    ['@babel/preset-typescript']
                ],
                plugins: ['@vue/babel-plugin-jsx']
            }
        ]
    }
}

