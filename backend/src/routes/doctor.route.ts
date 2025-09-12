import { Router } from "express";
import { register } from "../controllers/doctor.controller.js";


const router = Router()

router.route('/doctor-register').post(register)

export default router