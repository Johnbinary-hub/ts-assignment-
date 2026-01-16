const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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


const bookRoutes = require("./routes/Ts-academyRoutes");
app.use("/student", bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Ts-academy")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
