module.exports = function () {
  return {
    // files: [
      // 'src/**/*.js',
    // ],
    // tests: [
    //   'tests/**/*.spec.js'
    // ],
    env: {
      type: 'node',
      params: {
        runner: `-r ${require.resolve('esm')}`
      }
    }
  }
};
