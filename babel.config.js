// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@uanlove': './src',
            '@components': './src/components',
            '@views': './src/views',
            '@hooks': './src/hooks',
            '@services': './src/sevices',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  };
};
