import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    eventType: {
      type: Boolean,
      required: true,
    },
    imageBanner: {
      type: File,
      default: false,
    },
    clients: {
      type: Object,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.users || mongoose.model("users", userSchema);

export default model;