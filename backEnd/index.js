import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const mongoURI =
  "mongodb+srv://a7kille:4W42w1GdjFXjlT7z@cluster0.9cob9pj.mongodb.net/?retryWrites=true&w=majority";
const app = express();

import { feedBackModel } from "./model/feedback.js";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to database ");
  } catch (error) {
    console.error(error);
  }
};
connectDB();
app.use(cors());
app.use(express.json());

app.post("/feedback", async (req, res) => {
  try {
    const feedbackData = req.body;
    const feedback = new feedBackModel(feedbackData);
    await feedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feedback", async (req, res) => {
  try {
    const feedback = await feedBackModel.find();
    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(7777, () => {
  console.log(`Server is running on port 7777`);
});
