import { COOKIE_CONFIG, COOKIE_NAME, HTTP_STATUS } from "@config/constants";
import { userModel } from "@models/user";
import { isMatch } from "@utils/bcrypt";
import { signToken } from "@utils/jwt";
import type { Request, Response } from "express";

export async function loginUser(req: Request, res: Response) {
  const payload = req.body;

  try {
    const user = await userModel.findOne({ email: payload?.email });

    if (!user)
      return res
        .status(HTTP_STATUS.notFound.number)
        .json({
          statusMessage: HTTP_STATUS.notFound.message,
          message: "El usuario no fue encontrado, por favor regístrate.",
        });

    if (await !isMatch(payload?.password, user.hash))
      return res
        .status(HTTP_STATUS.unauthorized.number)
        .json({
          statusMessage: HTTP_STATUS.unauthorized.message,
          message: "Credenciales inválidas."
        })

    const result = signToken(user)

    res.cookie(COOKIE_NAME, result.token, COOKIE_CONFIG)
    res.json(user);
  } catch (e) {
    res.status(HTTP_STATUS.serverError.number).json({ statusMessage: HTTP_STATUS.serverError.message })
  }
}


export async function signinUser (req: Request, res: Response) {
 const payload = req.body
}