module.exports = function isAuth(req, res, next){ 
  // pass into any protected route as middleware to verify user is authorized
  if(req.isAuthenticated()){
    console.log("WE ARE LOGGED IN", req.session)
    next();
  } else {
    console.log("WE ARE NOT LOGGED IN", req.session);
    res.status(401).json({message: 'You are unauthorized to view this page.'})
  }
}