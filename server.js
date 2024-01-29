import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";

import cors from "cors";

//! configure env
dotenv.config();

// !database config
connectDB();

//! rest object
const app = express();

// !middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//! PORT
const PORT = process.env.PORT;

//!route
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);

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
