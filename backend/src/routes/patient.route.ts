import { Router } from "express";
import { addpatient ,
        getAllPatients,
        getpatient
 } from "../controllers/patient.controller.js";
import verifyJwt from "../middlewares/auth.middleware.js";
const router = Router()

router.use(verifyJwt)
router.route('/add-patient').post(addpatient)
router.route('/patients/:id').get(getpatient)
router.route("/doctor-patients").get(getAllPatients)

export default router