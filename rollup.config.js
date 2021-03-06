var typescript = require('rollup-plugin-typescript');
var ts = require('typescript');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var replace = require('rollup-plugin-replace');
var uglify = require('rollup-plugin-uglify');
var buble = require('rollup-plugin-buble');

module.exports = {
    input: 'src/Cookied.ts',
    output: {
     file: 'build/cookied.js',
     format: 'umd',
     name: 'Cookied',
     sourcemap: true,
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      typescript({
        target: "es2015",
        jsx: "react"
      }),
      resolve({ //used to resolve NPM module reading from packages.json those entrypoint (ES6 - Main or Browser specific)
        jsnext: true,
        main: true,
        browser: true
      }),
      buble(),
      commonjs({
        include: [
          'node_modules/**'
        ],
        namedExports: {
          'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render']
        }
      }),
      uglify()
    ]
};
