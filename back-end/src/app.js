const express = require("express")
const cors = require("cors")

const storiesRouter = require("./stories/stories.router");
const businessRouter = require("./businesses/businesses.router");

const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use("/stories", storiesRouter);
app.use("/businesses", businessRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;