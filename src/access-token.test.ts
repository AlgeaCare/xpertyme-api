import { shouldGetNewToken } from './access-token'
import { AccessTokenResponse } from './types'

// 1000ms is one second
const seconds = 1000

const baseToken: AccessTokenResponse = {
  expires_in: 40,
  'not-before-policy': 200,
  access_token: 'something',
  scope: 'another thing',
  refresh_expires_in: 129,
  token_type: 'Bearer'
}
describe('getting an access token', () => {
  it('should get a new token if the old one expired', () => {
    const lastRequested = new Date(Date.now() - 41 * seconds)
    expect(
      shouldGetNewToken({ token: baseToken, lastRequested, tokenBuffer: 30 })
    ).toEqual(true)
  })

  it('should not get a new access token if the last one is still valid', () => {
    const lastRequested = new Date(Date.now() - 1 * seconds)
    expect(
      shouldGetNewToken({
        token: baseToken,
        lastRequested,
        tokenBuffer: 30
      })
    ).toEqual(false)
  })

  it('should get a new token if the old one is about to expire soon', () => {
    const lastRequested = new Date(Date.now() - 11 * seconds)
    // 11 + 30 = 41 > 40 (token expiry)
    expect(
      shouldGetNewToken({
        token: baseToken,
        lastRequested,
        tokenBuffer: 30
      })
    ).toEqual(true)
  })

  it('should not get a new one for one that was requested 9 seconds ago', () => {
    const lastRequested = new Date(Date.now() - 9 * seconds)
    // 9 + 30 = 39 (< 40 on expiry)
    expect(
      shouldGetNewToken({ token: baseToken, lastRequested, tokenBuffer: 30 })
    ).toEqual(false)
  })

  it('should get a new token if there is no last requested', () => {
    expect(
      shouldGetNewToken({ token: baseToken, lastRequested: undefined })
    ).toEqual(true)
  })
  it('should get a new token if there is no current token', () => {
    expect(
      shouldGetNewToken({
        token: undefined,
        lastRequested: new Date(Date.now() - 1 * seconds)
      })
    ).toEqual(true)
  })
})
