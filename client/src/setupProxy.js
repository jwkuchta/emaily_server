// restart the server when you make changes here

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/surveys", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
}