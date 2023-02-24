import { envConfig } from './config'
import wretch from 'wretch'
import { getAccessToken } from './access-token'

export const xpertymeApi = async (endPoint: string) => {
  const { xpertyme } = envConfig()

  // get the access token for each request to the API
  const token = await getAccessToken()

  return wretch(`${xpertyme.apiDomain}/api/${endPoint}`)
    .auth(`Bearer ${token}`)
    .headers({ Accept: 'application/json' })
}
