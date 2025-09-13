
import { Request, Response } from "express"
import Patient from "../models/patient.model.js"

// this is for adding the new patient and this will aslo be provided to vapi 
const addpatient = async (req: Request, res: Response) => {

    try {
        const { name, age, gender, phone } = req.body

        if (!name || !age || !gender || !phone) {
            return res.status(400).json({
                message: "all the fields are required"
            })
        }

        console.log("doctorId : ", req?.doctor?._id)
        const patient = await Patient.create({
            doctorId: req?.doctor?._id,
            name: name.toLowerCase(),
            age: age,
            gender: gender.toLowerCase(),
            phone: phone
        })

        const isPatientRegistered = await Patient.findById(patient?._id)

        if (!isPatientRegistered) {
            return res.status(500).json({
                message: " patient registeration failed"
            })
        }

        return res.status(200).json({
            message: "patient registered successfully"
        })

    } catch (error) {
        console.log('the error at the time of patient registeration ', error)

        return res.status(500).json({
            message: " patient registeration failed"
        })
    }
}

// this is used get the particular patient by id
const getpatient = async (req: Request, res: Response) => {

    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                message: "Id is required"
            })
        }

        const patient = await Patient.findById(id)

        if (!patient) {
            return res.status(400).json({
                message: "patient does not exits or Invalid Id"
            })
        }

        return res.status(200).json({
            message: "patient information fetched succesfuly",
            patient: patient
        })

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong at time of fetching the patient information"
        })
    }

}

// this is used to get all the patient of the doctor
const getAllPatients = async (req:Request , res:Response) => {
    try {
        const {doctorId} = req.query

        if(!doctorId){
             return res.status(400).json({
                message: "doctorId is required"
            })
        }

        const doctor = await Patient.find({doctorId})

        if(!doctor){
            return res.status(400).json({
                message :"cannot fetch the patients of doctor"
            })
        }

        return res.status(200).json(
            {message : " all the patient of the doctor fetched successfully" , doctorPatient : doctor}
        )
    } catch (error) {
        
        console.log("error : " , error)
        return res.status(500).json(
            {message : "something went wrong at time of fetching the all patient details of the doctor"}
        )
    }

}

export {
    addpatient,
    getpatient,
    getAllPatients
}