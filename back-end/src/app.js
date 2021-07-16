const express = require("express")
const cors = require("cors")
const session = require("./authUtils/session");
const passport = require("passport");
const storiesRouter = require("./stories/stories.router");
const businessRouter = require("./businesses/businesses.router");
const gradsRouter = require("./graduates/graduates.router");

const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use("/stories", storiesRouter);
app.use("/businesses", businessRouter);
app.use("/graduates", gradsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;