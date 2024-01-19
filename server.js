import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//! configure env
dotenv.config();

//! rest object
const app = express();

//! PORT
const PORT = process.env.PORT;

//! rest api
app.get("/", (req, res) => {
  res.send("Hello word");
});

//! App listen
app.listen(PORT, () => {
  console.log(
    `Server is listening on ${process.env.MODE} mode on PORT :: ${PORT}`.yellow
      .underline.bold
  );
});
