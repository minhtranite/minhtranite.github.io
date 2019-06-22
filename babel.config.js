module.exports = api => {
  const isTest = api.env('test');
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: isTest ? 'commonjs' : false,
      },
    ],
  ];
  const plugins = ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'];
  return {
    presets,
    plugins,
  };
};
