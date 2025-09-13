import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" ,required: true },
  date: { type: Date, default: Date.now },
  symptoms: { type: String },
  diagnosis: { type: String },
  prescription: { type: String },
  notes: { type: String }
}, { timestamps: true });

const Visit = mongoose.model("Visit" , visitSchema)
export default Visit
