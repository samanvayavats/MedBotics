import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    clinicName: { type: String },
}, { timestamps: true });

doctorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

doctorSchema.methods.isPasswordCorrect = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
}

doctorSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
        },
        (process.env.ACCESS_TOKEN_SECRET) as any,
        {
            expiresIn: (process.env.ACCESS_TOKEN_EXPIRY) as any
        }
    )
}

doctorSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        (process.env.REFRESH_TOKEN_SECRET) as any,
        {
            expiresIn: (process.env.REFRESH_TOKEN_EXPIRY) as any
        }
    )
}

const Doctor = mongoose.model("Doctor", doctorSchema)
export default Doctor