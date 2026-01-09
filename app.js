const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// --- MIDDLEWARE ---
// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Enable CORS for any frontend (you can restrict to specific origins if needed)
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:3000"], // add your frontends here
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// --- ROUTES ---
const bookRoutes = require("./routes/Ts-academyRoutes");
app.use("/student", bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Ts-academy")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
