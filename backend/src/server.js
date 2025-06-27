import express from "express";
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter);

app.use("/api/notes", notesRouters);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });
});
