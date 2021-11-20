import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  logo: {
    type: String,
    required: false,
  },
  school_name: {
    type: String,
    required: true,
  },
  default_rent_time_in_days: {
    type: Number,
    required: false,
  },
  maximum_rent_time_in_days: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Setting", Schema);
