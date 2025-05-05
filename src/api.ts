import { envConfig } from './config'
import wretch from 'wretch'
import fetch from 'node-fetch'
import { getAccessToken } from './access-token'
import { retry } from 'wretch-middlewares'

// Configure wretch to use node-fetch
const w = wretch().polyfills({ fetch })

export const xpertymeApi = async (endPoint: string, withRetry = true) => {
  const { xpertyme } = envConfig()

  // get the access token for each request to the API
  const token = await getAccessToken()
  const url = `${xpertyme.apiDomain}/${endPoint}`
  
  // Create a new wretch instance with the base URL
  let request = w.url(url)
    .auth(`Bearer ${token}`)
    .headers({ 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })

  // Add retry middleware if needed
  if (withRetry) {
    request = request.middlewares([
      retry({
        maxAttempts: 5,
        retryOnNetworkError: true
      })
    ])
  }
  console.log(url);
  return request
}
