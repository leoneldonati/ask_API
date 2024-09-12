import { HTTP_STATUS } from "@config/constants";
import { verifyToken } from "@utils/jwt";
import type { NextFunction, Response } from "express";


export function checkSessionStatus (req: ExtendedReqWithToken, res: Response, next: NextFunction) {
  const session = req.headers?.session as string
  const { unauthorized } = HTTP_STATUS
  
  if (!session) return res.status(unauthorized.number).json({ message: unauthorized.message })
  
  const { decodedToken } = verifyToken(session)

  req.decodedToken = decodedToken

  return next()
}