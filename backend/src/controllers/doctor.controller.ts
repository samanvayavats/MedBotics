import Doctor from "../models/doctor.model.js";
import { Request, Response } from "express";
import { strSchema } from '../schema/index.js'

const register = async (req: Request, res: Response) => {
    try {
        
        const body = req.body

        const name = body.name
        const email = body.email
        const password = body.password
        const clinicName = body.clinicName

        if (!name || !email || !password || !clinicName) {
            return res.status(400).json({ message: "all the fields are required at time of resgistration " })
        }

        if (!strSchema.safeParse(name) || !strSchema.safeParse(email) || !strSchema.safeParse(password) || !strSchema.safeParse(clinicName)) {
            return res.status(400).json({ message: "schema validation failed for name or email or password " })
        }

        const isUserExits = await Doctor.findOne(
            { $or: [{ name }, { email }] }
        )

        if (isUserExits) {
            return res.status(400).json({ message: "User already exits" })
        }

        const doctor = await Doctor.create({
            name: name.toLowerCase(),
            email: email.toLowerCase(),
            password,
            clinicName: clinicName.toLowerCase()
        })

        const isDoctorRegistered = await Doctor.findById(doctor?._id).select('-password ')

        if (!isDoctorRegistered) {
            return res.status(400).json({ message: "schema validation failed for name or email or password " })
        }

        return res.status(200).json({ message: "doctor registered ", isDoctorRegistered })
    
    } catch (error) {
    
        console.log('the error at time of registeraton', error)
        return res.status(500).json({ message: "something went wrong at time of registeration " })
    
    }

}

export {
    register
}