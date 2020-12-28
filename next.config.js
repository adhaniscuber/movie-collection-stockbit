const withPWA = require('next-pwa')
const pkg = require('./package.json')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const baseConfig = withBundleAnalyzer({
  images: {
    domains: ['raw.githubusercontent.com', 'github.githubassets.com'],
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
        esModule: false,
      },
    })

    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        BASE_URL: JSON.stringify(process.env.NEXT_PUBLIC_BASE_URL),
        BASE_IMAGE_URL: JSON.stringify(process.env.NEXT_PUBLIC_BASE_IMAGE_URL),
        IMAGE_FALLBACK: JSON.stringify(process.env.NEXT_PUBLIC_IMAGE_FALLBACK),
        GITHUB_URL: JSON.stringify(pkg.homepage),
      })
    )

    return config
  },
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: true,
    buildExcludes: [/fonts\/.*$/],
    clientsClaim: true,
    skipWaiting: true,
  },
  ...baseConfig,
})
