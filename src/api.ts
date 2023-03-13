import { envConfig } from './config'
import wretch from 'wretch'
import { getAccessToken } from './access-token'
import { retry } from 'wretch-middlewares'

export const xpertymeApi = async (endPoint: string) => {
  const { xpertyme } = envConfig()

  // get the access token for each request to the API
  const token = await getAccessToken()
  const url = `${xpertyme.apiDomain}/api/${endPoint}`
  console.log(url)
  return wretch(url)
    .middlewares([
      retry({
        maxAttempts: 3,
        onRetry: ({ error, url, options }) => {
          console.error(`ERROR in XPT API, will retry`)
          console.error(JSON.stringify(error))
          return { url, options }
        }
      })
    ])
    .auth(`Bearer ${token}`)
    .headers({ Accept: 'application/json' })
}
