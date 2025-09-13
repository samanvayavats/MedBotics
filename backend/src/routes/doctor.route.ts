import { Router } from "express";
import { register  ,login ,generateAccessAndRefreshToken} from "../controllers/doctor.controller.js";


const router = Router()

router.route('/doctor-register').post(register)
router.route('/doctor-login').post(login)
router.route('/generate-token').post(generateAccessAndRefreshToken)


export default router