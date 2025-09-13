import verifyJwt from "../middlewares/auth.middleware.js";
import {addPatientVisit, getPatientAllVisitDetails} from "../controllers/visit.controller.js"
import { Router } from "express";
const router = Router()

router.use(verifyJwt)

router.route("/add-patient-visit").post(addPatientVisit)
router.route("/patient-visits/:patientId").get(getPatientAllVisitDetails)

export default router