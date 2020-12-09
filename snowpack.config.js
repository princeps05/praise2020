// snowpack.config.js
// Plugin: https://github.com/ionic-team/rollup-plugin-node-polyfills
module.exports = {
    extends: '@snowpack/app-scripts-react',
    devOptions: {
        port: 8080,
        src: 'src',
        bundle: process.env.NODE_ENV === 'production',
        fallback: 'public/index.html',
    },
    installOptions: {
        rollup: {
            plugins: [require('rollup-plugin-node-polyfills')()],
        },
    },
    experiments: {
        routes: [{ src: '.*', dest: '/index.html', match: 'routes' }],
    },
};
