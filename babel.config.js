

module.exports = {
  presets: [
    'next/babel',
    'goods-core/babel/preset',
    'goods-ui/babel/preset',
  ],
  plugins: [
    ['babel-plugin-styled-components', { ssr: true, minify: true, pure: true }],
  ],
}
