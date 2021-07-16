module.exports.isAuth = function isAuth(req, res, next){ 
  // pass into any protected route as middleware to verify user is authorized
  if(req.isAuthenticated()){
    next();
  } else {
    res.status(401).json({message: 'You are unauthorized to view this page.'})
  }
}