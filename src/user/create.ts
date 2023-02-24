import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path = paths['/api/userManager/v0/user']['put']
type Payload = Path['parameters']['body']['body']
type Response = Path['responses']['201']['schema']

export const create = async (payload: Payload) => {
  const apiCall = await xpertymeApi(`${apiRoot}/user`)
  const res = await apiCall.put(payload).res()
  if (!res.ok) {
    if (res.status === 400) {
      throw new Error('user already exists')
    }
    console.error(res.body)
    throw new Error('unknown error!')
  }
  return (await res.json()) as Response
}
