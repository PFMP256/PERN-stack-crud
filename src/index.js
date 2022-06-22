const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');
const router = require("./routes/tasks.routes");


dotenv.config({ path: './.env' });

const app = express();

// Settings
app.set("port", process.env.PORT );

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
})

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
