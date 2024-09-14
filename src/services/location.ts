import { IPINFO_TOKEN } from "@config/env-variables";
import { Location } from "types";

export async function getCurrentLocation (ip: string): Promise<Location | null> {
  const res = await fetch(`https://ipinfo.io/${ip}?token=${IPINFO_TOKEN}`)

  if (!res.ok) return null

  const location = await res.json()

  return {
    city: location?.city,
    country: location?.country,
    region: location?.region,
    timezone: location?.timezone
  }
}