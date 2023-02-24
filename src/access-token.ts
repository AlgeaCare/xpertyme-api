import { envConfig } from './config'
import wretch from 'wretch'
import { AccessTokenResponse } from './types'

// so we don't keep requesting new tokens
let token: AccessTokenResponse
let lastRequested: Date

export const shouldGetNewToken = ({
  token,
  lastRequested
}: {
  token?: AccessTokenResponse
  lastRequested?: Date
}) => {
  if (!lastRequested) {
    return true
  }
  if (!token) {
    return true
  }

  // if she expired
  if (
    Math.abs(lastRequested.getTime() - new Date().getTime()) / 1000 >
    token.expires_in
  ) {
    return true
  }

  return false
}

export const getAccessToken = async () => {
  if (shouldGetNewToken({ token, lastRequested })) {
    const { xpertyme } = envConfig()

    // set when we last requested to now
    lastRequested = new Date()
    const tokenResponse = await wretch(
      `${xpertyme.apiDomain}/'auth/realms/algeacare/protocol/openid-connect/token'`
    )
      .auth(`Basic ${encodedKey()}`)
      .headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*'
      })
      .formUrl({
        grant_type: 'client_credentials'
      })
      .post()
      .res(async (r) => (await r.json()) as AccessTokenResponse)
    if (!tokenResponse.access_token) {
      throw new Error('could not get the access token from expertyme')
    }
    // set the token for the next request
    token = tokenResponse

    return token.access_token
  }
  return token.access_token
}

const encodedKey = () => {
  const { xpertyme } = envConfig()
  return Buffer.from(`${xpertyme.clientId}:${xpertyme.clientSecret}`).toString(
    'base64'
  )
}
