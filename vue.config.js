module.exports = {
    devServer: {
        proxy: 'http://localhost:8085/'
    },
};

// devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8085/',
//         pathRewrite: {'^/api' : ''}
//       },
//       '/crawler': {
//         target: 'http://localhost:8082/',
//         pathRewrite: {'^/crawler' : ''}
//       },
//     }
//   },
