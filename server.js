require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3100;

// Init middleware
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => res.send("Hello Golfers!"));
app.use("/yardages", require("./routes/yardages"));

// Start the server on port 3000
app.listen(port, () => console.log(`Hello Golfers, welcome to port: ${port}`));