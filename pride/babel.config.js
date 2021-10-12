module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
            '@styles': './src/styles',
            '@shared': './src/shared',
            '@navigation': './src/navigation',
            '@domain': './src/domain',
            '@components': './src/components',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@services': './src/sevices',
            '@utils': './src/utils',
            '@context': './src/context'
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv'
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
