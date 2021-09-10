const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    // Forwarding those requests to the real target URL from the React server
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            // No need for production target as there is only the Node server there
            target: "http://localhost:5000",
        })
    );
};