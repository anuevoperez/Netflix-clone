const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://anuevoweb:0104199411011999@cluster.ktrdgeb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("-----> DB Connetion Successfull. <-----");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`-----> Server started on port ${port}, URL: https://localhost:${port}/. <-----`);
});
