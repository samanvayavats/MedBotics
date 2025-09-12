import { Router } from "express";
import { register  ,login} from "../controllers/doctor.controller.js";


const router = Router()

router.route('/doctor-register').post(register)
router.route('/doctor-login').post(login)


export default router