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
          rootPathSuffix: 'src/modules/doctor',
        },
        {
          rootPathPrefix: '@manager/',
          rootPathSuffix: 'src/modules/manager',
        },
        {
          rootPathPrefix: '@secretary/',
          rootPathSuffix: 'src/modules/secretary',
        },
      ],
    },
  ]),
);
