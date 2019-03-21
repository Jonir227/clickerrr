module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        useBuiltIns: 'entry',
        targets: ['last 1 version', '> 1%'],
      },
    ],
  ],
  plugins: ['@babel/proposal-class-properties'],
};
