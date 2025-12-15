import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.ts";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
