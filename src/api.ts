import { envConfig } from './config'
import wretch from 'wretch'
import * as nodeFetch from 'node-fetch'
import { getAccessToken } from './access-token'
import { retry } from 'wretch-middlewares'

wretch().polyfills({
  fetch: nodeFetch
})

export const xpertymeApi = async (endPoint: string, withRetry = true) => {
  const { xpertyme } = envConfig()

  // get the access token for each request to the API
  const token = await getAccessToken()
  const url = `${xpertyme.apiDomain}/api/${endPoint}`
  const middleWaresToAdd = []
  if (withRetry) {
    middleWaresToAdd.push(
      retry({
        maxAttempts: 5,
        retryOnNetworkError: true
      })
    )
  }
  console.log(url)
  return wretch(url)
    .middlewares(middleWaresToAdd)
    .auth(`Bearer ${token}`)
    .headers({ Accept: 'application/json' })
}
