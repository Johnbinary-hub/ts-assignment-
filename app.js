import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/Ts-academyRoutes.js";


console.log("apiKey:", process.env.api_key); // Debug log

const app = express();


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());


app.use("/student", bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Ts-academy")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});



export default app;   