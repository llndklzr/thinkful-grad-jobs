const express = require("express")
const cors = require("cors")
const session = require("./authUtils/session");
const passport = require("passport");
const storiesRouter = require("./stories/stories.router");
const businessRouter = require("./businesses/businesses.router");
const gradsRouter = require("./graduates/graduates.router");
const isAuth = require("./authUtils/isAuth");

const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
// app.options("*", cors({
//   origin: [
//     "http://localhost:3000",
//     "https://localhost:3000"
//   ],
//   credentials: true,
//   exposedHeaders: ['set-cookie']
// }));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use("/stories", storiesRouter);
app.use("/businesses", businessRouter);
app.use("/graduates", gradsRouter);

// testing only
app.use("/success", isAuth, (req, res, next) =>{
  //console.log(req.session)
  res.json({data: "we are logged in"})
})

// app.use("/logout", (req, res, next)=>{
//   passport.deserializeUser((userId, done) => {
//     const user = service.getUserById(userId).catch(err => done(err));
//     done(null, user)
//   });  
//   res.json({data: "you are logged out"})
// })

app.use(notFound);
app.use(errorHandler);

module.exports = app;