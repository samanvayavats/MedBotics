import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  phone: { type: String },
  history: { type: String }, // overall medical history summary
}, { timestamps: true });

const Patient = mongoose.model("Patient" , patientSchema)
