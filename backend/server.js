import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js";
import connectDB from "./configs/db.config.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

const app = express();

// If you need to allow credentials (cookies, auth tokens)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => res.send("Server Started"));

app.use("/api/user", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
