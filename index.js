const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy all requests to example target (change to whatever you want)
app.use('/', createProxyMiddleware({
  target: 'https://example.com',
  changeOrigin: true,
  pathRewrite: { '^/': '/' }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
