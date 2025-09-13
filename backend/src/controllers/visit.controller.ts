// POST /api/visits → Add new visit for a patient

// GET /api/visits/:patientId → Get all visits for a patient
import { Request, Response } from "express";
import mongoose from "mongoose";
import Visit from "../models/visit.model.js"; 

// this is used to add the visit of the patient and it will be provided to the vapi
const addPatientVisit = async (req: Request, res: Response) => {

    try {
        const { patientId, symptoms, diagnosis, prescription, notes } = req.body

        if (!patientId || !symptoms || !diagnosis || !prescription || !notes) {
            return res.status(400).json({
                message: "all the fields are required"
            })
        }

        const visit = await Visit.create({
            patientId: patientId,
            doctorId: req?.doctor?._id,
            symptoms: symptoms.toLowerCase(),
            diagnosis: diagnosis.toLowerCase(),
            prescription: prescription.toLowerCase(),
            notes: notes.toLowerCase()
        })

        const isVisitCreated = await Visit.findById(visit?._id)

        if (!isVisitCreated) {
            return res.status(500).json({
                message: "something went in creating the new visit of the patient"
            })
        }

        return res.status(200).json({
            message: "visit created successfully",
            visit: isVisitCreated
        })

    } catch (error) {
        console.log("error : ", error)
        return res.status(500).json({
            message: "something went in creating the new visit of the patient"
        })
    }
}

// this has all the visits of the particular Patient and it will be provided to the vapi
const getPatientAllVisitDetails = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;

    if (!patientId) {
      return res.status(400).json({
        message: "The patientId is required",
      });
    }


    const objectId = new mongoose.Types.ObjectId(patientId);

    const patientAllVisits = await Visit.aggregate([
      {
        $match: {
          patientId: objectId,
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patientDetails",
        },
      },
      { $unwind: "$patientDetails" }, 
      {
        $project: {
          _id: 1,
          visitDate: 1, 
          symptoms: 1,
          diagnosis: 1,
          prescription: 1,
          notes: 1,
          "patientDetails.name": 1,
          "patientDetails.age": 1,
          "patientDetails.gender": 1,
          "patientDetails.phone": 1,
        },
      },
    ]);

    if (!patientAllVisits || patientAllVisits.length === 0) {
      return res.status(404).json({
        message: "No visits found for this patient",
      });
    }

    return res.status(200).json({
      message: "Patient visit details fetched successfully",
      patientVisists: patientAllVisits,
    });

  } catch (error) {
    console.error("Error fetching patient visit details:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: (error as Error).message,
    })
  }
}

export {
    addPatientVisit,
    getPatientAllVisitDetails
}