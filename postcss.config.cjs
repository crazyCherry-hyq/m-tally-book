module.exports = {
  plugins: {
    'postcss-pxtorem': {
      propList: ['*'],
      rootValue: 37.5,
      selectorBlackList: ['.norem']
    }
  }
}
