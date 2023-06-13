module.exports = {
  plugins: {
    'postcss-pxtorem': {
      propList: ['*'],
      rootValue: 15,
      selectorBlackList: ['.norem']
    }
  }
}
