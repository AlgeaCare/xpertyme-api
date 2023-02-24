/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { APIConfig } from './types'
import { config } from 'dotenv'
config()

export const envConfig = (): APIConfig => {
  // not all lambdas need all env vars so we do NOT throw
  // when not set, but lambdas do write to logs.
  return {
    xpertyme: {
      clientId: process.env.XPERT_CLIENT_ID!,
      clientSecret: process.env.XPERT_CLIENT_SECRET!,
      apiDomain: process.env.XPERT_API_DOMAIN!,
      tokenPath: process.env.XPERT_TOKEN_PATH!
    }
  }
}
