//Middleware
function logger(req, res, next) {
  console.log(req.method, req.url, res.statusCode);
  next();
}

module.exports = logger;
