module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({ root: process.cwd() }),
                require('tailwindcss')('./tailwind.js'),
                require('autoprefixer'),
              ],
            },
          }
        ]
      }
    ]
  }
};
