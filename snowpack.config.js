// snowpack.config.js
// Plugin: https://github.com/ionic-team/rollup-plugin-node-polyfills
module.exports = {
    extends: '@snowpack/app-scripts-react',
    plugins: ['@snowpack/plugin-react-refresh'],
    devOptions: {
        port: 3000,
        src: 'src',
        bundle: process.env.NODE_ENV === 'production',
        fallback: 'public/index.html',
    },
    installOptions: {
        polyfillNode: true,
        rollup: {
            plugins: [require('rollup-plugin-node-polyfills')()],
        },
    },
    experiments: {
        routes: [{ src: '.*', dest: '/index.html', match: 'routes' }],
    },
    alias: {
        src: './src',
    },
};
