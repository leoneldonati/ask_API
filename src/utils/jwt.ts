import { SECRET_JWT } from '@config/env-variables'
import jwt from 'jsonwebtoken'

export function signToken (payload: {} | string) {
  try {
    return {
      ok: true,
      token:  jwt.sign(payload, SECRET_JWT!)
    }
  }
  catch (error) {
    return {
      ok: false,
      error
    }
  }
}

export function verifyToken (token: string) {
  try {
    return {
      ok: true,
      decodedToken: jwt.verify(token, SECRET_JWT!)
    }
  }
  catch (error) {
    return {
      ok: false,
      error
    }
  }
}