export type AccessTokenResponse = {
  access_token: string
  expires_in: number
  'not-before-policy': number
  refresh_expires_in: number
  scope: string
  token_type: 'Bearer'
}
