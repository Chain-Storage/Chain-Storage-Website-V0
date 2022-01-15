const express = require("express");
const dotenv = require("dotenv");
const Database = require("./storage/mongoDb");
const helmet = require("helmet");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const upload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");

const usersRouter = require("./api/v1/routes/user.router");

const app = express();

// Set security HTTP headers
app.use(helmet());
app.use(upload());
app.use(cookieParser());
app.use(express.json());

dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Database Connection
const newDatabase = new Database();
newDatabase.creatDatabase();

// Data sanitization against XSS
app.use(xss());

app.use("/api/v1/users", usersRouter);

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = app.listen(process.env.PORT || 6000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// module.exports = app;
