'use strict'
const path = require('path')
const { uglify } = require('rollup-plugin-uglify')
const clear = require('rollup-plugin-clear')
const babel = require('rollup-plugin-babel')

const resolve = filePath => path.join(__dirname, '../', filePath)

module.exports = {
  input: resolve('./src/outside-click-js.js'),
  output: {
    file: resolve('dist/outside-click-js.min.js'),
    format: 'umd',
    name: '$outsideClick'
  },
  plugins: [
    uglify(),
    clear({
      targets: [resolve('dist')]
    }),
    babel({
      include: resolve('./src/outside-click-js.js')
    })
  ]
}
