import { xpertymeApi } from '../api'
import { paths } from '../../schemas/reporting/schema'
import { apiRoot } from '.'

type Path = paths['/api/reportingManager/v0/users']['get']
type Payload = Path['parameters']['query']
type Response = Path['responses']['200']['schema']

export const users = async ({ usersType = 'all', page, perPage }: Payload) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/users?usersType=${usersType}&page=${page}&perPage=${perPage}`
  )
  const res = await apiCall.get().res()

  return (await res.json()) as Response
}
