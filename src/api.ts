import { envConfig } from './config'
import wretch from 'wretch'
import { getAccessToken } from './access-token'
import { retry } from 'wretch/middlewares'

export const xpertymeApi = async (endPoint: string) => {
  const { xpertyme } = envConfig()

  // get the access token for each request to the API
  const token = await getAccessToken()
  const url = `${xpertyme.apiDomain}/api/${endPoint}`
  console.log(url)
  return wretch(url)
    .auth(`Bearer ${token}`)
    .headers({ Accept: 'application/json' })
    .middlewares([
      retry({
        maxAttempts: 3
      })
    ])
}
