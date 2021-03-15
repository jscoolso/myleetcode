module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      //处理babel转tsconfig.json中的别名paths['@src/']
      'module-resolver',
      {
        alias: {
          '@src': './src'
        }
      }
    ]
  ]
};
