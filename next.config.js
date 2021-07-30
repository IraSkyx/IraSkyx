module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const extension = pluginOptions.extension || /\.(js|ts|tsx)$/

  return Object.assign({}, nextConfig, {
    reactStrictMode: true,
    experimental: {
      reactRoot: true,
      //optimizeCss: true,
      optimizeImages: true,
      scrollRestoration: true,
    },
    future: {
      strictPostcssConfiguration: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'swc-loader',
            options: pluginOptions.options,
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}