// import { theme } from './src/theme/theme';
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'orange' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
