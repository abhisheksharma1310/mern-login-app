import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js";
import connectDB from "./configs/db.confog.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => res.send("Server Started"));

app.use("/user", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
