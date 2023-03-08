import { envConfig } from './config'
import wretch from 'wretch'
import formUrlAddon from 'wretch/addons/formUrl'
import { AccessTokenResponse } from './types'

// so we don't keep requesting new tokens
let token: AccessTokenResponse
let lastRequested: Date

export const shouldGetNewToken = ({
  token,
  lastRequested,
  tokenBuffer = 90
}: {
  token?: AccessTokenResponse
  lastRequested?: Date
  tokenBuffer?: number
}) => {
  if (!lastRequested) {
    return true
  }
  if (!token) {
    return true
  }

  const secondsSinceRequested =
    Math.abs(lastRequested.getTime() - new Date().getTime()) / 1000

  // if she has / is about to expire
  if (secondsSinceRequested + tokenBuffer > token.expires_in) {
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
      `${xpertyme.apiDomain}/${xpertyme.tokenPath}`
    )
      .addon(formUrlAddon)
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
