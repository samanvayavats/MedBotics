import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import Doctor from "../models/doctor.model.js";

// Extend Request interface to include `doctor`
declare global {
  namespace Express {
    interface Request {
      doctor?: typeof Doctor extends { prototype: infer T } ? T : unknown;
    }
  }
}

const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");


    if (!token) {
      return res.status(400).json({ message: "token is required" });
    }

    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as JwtPayload & { _id: string };

    const doctor = await Doctor.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!doctor) {
      return res.status(400).json({ message: "Invalid doctor" });
    }

    req.doctor = doctor;
    next();
  } catch (error: any) {
    console.error("Jwt verification error:", error.message);
    return res.status(401).json({ message: "jwt verification failed" });
  }
};

export default verifyJwt;
