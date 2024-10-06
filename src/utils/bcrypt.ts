import {hash, compare} from 'bcrypt'
import { signToken } from './jwt'


export async function hashPayload (payload: string) {

  const signedPayload = signToken(payload)

  return await hash(signedPayload.token!, 13)
}

export async function isMatch (payload: string, hash: string) {
  return await compare(payload, hash)
}