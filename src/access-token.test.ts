import { shouldGetNewToken } from './access-token'
import { AccessTokenResponse } from './types'

// 1000ms is one second
const seconds = 1000

const baseToken: AccessTokenResponse = {
  expires_in: 10,
  'not-before-policy': 200,
  access_token: 'something',
  scope: 'another thing',
  refresh_expires_in: 129,
  token_type: 'Bearer'
}
describe('getting an access token', () => {
  it('should get a new token if the old one expired', () => {
    const elevenSecondsAgo = new Date(Date.now() - 11 * seconds)
    expect(
      shouldGetNewToken({ token: baseToken, lastRequested: elevenSecondsAgo })
    ).toEqual(true)
  })

  it('should not get a new access token if the last one is still valid', () => {
    const aFewSecondsAgo = new Date(Date.now() - 2 * seconds)
    expect(
      shouldGetNewToken({ token: baseToken, lastRequested: aFewSecondsAgo })
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
