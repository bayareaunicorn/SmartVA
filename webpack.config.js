module.exports = {
    // ...the rest of your config
  
    resolve: {
      alias: {
        'react-native$': 'react-native-web'
      }
    }
  }
  
rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: STANDARD_EXCLUDE,
      use: [
        babelLoaderConfig,
        {
          loader: StylexPlugin.loader,
          options: {
            inject: true,
          },
        },
      ],
    },
  ]