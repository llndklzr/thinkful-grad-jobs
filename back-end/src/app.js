const express = require("express")
const cors = require("cors")
const session = require("./authUtils/session");
const passport = require("passport");
const storiesRouter = require("./stories/stories.router");
const businessRouter = require("./businesses/businesses.router");
const gradsRouter = require("./graduates/graduates.router");
const resumesRouter = require("./resumes/resumes.router")

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

app.use("/failure", (req, res, next)=>{
  next({
    status: 401,
    message: `Those credentials are invalid.`
  })
})

app.use(notFound);
app.use(errorHandler);

module.exports = app;