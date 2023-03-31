const TS = require('rollup-plugin-typescript2');

module.exports = {
    input: [
        'src/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/Color/index.ts',
        'src/atoms/text/index.ts',
        'src/atoms/margin/index.ts',

    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [TS()],
    external: ['react', '@dse/foundation'],
};