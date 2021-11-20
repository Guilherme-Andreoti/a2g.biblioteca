import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
    required: false,
  },
  preview_end_date: {
    type: Date,
  },
});

export default mongoose.model("Rent", Schema);
