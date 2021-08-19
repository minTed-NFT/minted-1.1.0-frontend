const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app)  {
    app.use(
        createProxyMiddleware('https://bitclout.com/api/v0/get-posts-for-public-key', {
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    )
}