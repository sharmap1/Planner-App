const proxy = require("http-proxy-middleware");
// replace localhost:5000 with backend link
module.exports = function(app) {
  app.use(proxy("/api/**", { target: "http://localhost:5000" }));
  app.use(proxy("/otherApi/**", { target: "http://localhost:5000" }));
};
