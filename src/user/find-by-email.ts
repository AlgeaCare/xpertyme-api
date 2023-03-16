import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path = paths['/api/userManager/v0/user/findByEmail']['get']
type Query = Path['parameters']['query']
type Response = Path['responses']['200']['schema']

export const findByEmail = async (payload: Query) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/user/findByEmail?email=${payload.email}`
  )
  const res = await apiCall.get().res()

  if (res.status === 204) {
    return undefined
  }

  return (await res.json()) as Response
}
