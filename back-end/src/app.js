const express = require("express")
const cors = require("cors")
const session = require("./authUtils/session");
const passport = require("passport");
const storiesRouter = require("./stories/stories.router");
const businessRouter = require("./businesses/businesses.router");
const gradsRouter = require("./graduates/graduates.router");
const resumesRouter = require("./resumes/resumes.router")
const isAuth = require("./authUtils/isAuth");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const corsOptions = {
  origin: ["http://localhost:3000", "https://thinkful-grad-jobs.vercel.app"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Access-Control-Allow-Origin"]
};

const app = express();
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());


app.use(session);
app.use(passport.initialize());
app.use(passport.session());



app.use("/stories", storiesRouter);
app.use("/businesses", businessRouter);
app.use("/graduates", gradsRouter);
app.use("/resumes", resumesRouter)

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