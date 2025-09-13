import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" ,required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  phone: { type: String }
}, { timestamps: true });

const Patient = mongoose.model("Patient" , patientSchema)
export default Patient
