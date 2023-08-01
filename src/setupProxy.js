const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const baseUrl = process.env.REACT_APP_API_PROXY;
  app.use(
    '/api',
    createProxyMiddleware({
      target: baseUrl,
      changeOrigin: true
    })
  );
};
