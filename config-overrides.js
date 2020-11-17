const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: 'src',
        },
        {
          rootPathPrefix: '@shared/',
          rootPathSuffix: 'src/shared',
        },
        {
          rootPathPrefix: '@doctor/',
          rootPathSuffix: 'src/modules/Doctor',
        },
        {
          rootPathPrefix: '@manager/',
          rootPathSuffix: 'src/modules/Manager',
        },
        {
          rootPathPrefix: '@secretary/',
          rootPathSuffix: 'src/modules/Secretary',
        },
      ],
    },
  ]),
);
