module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@styles': './src/styles',
            '@routes': './src/routes'
          },
        },
      ],
    ],
  };
};
