import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path = paths['/api/userManager/v0/user/findByExternalId']['get']
type Response = Path['responses']['200']['schema']

export const findByZid = async (zid: string, withRetry = false) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/user/findByExternalId?externalId=${zid}`,
    withRetry
  )
  const res = await apiCall.get().res()

  return (await res.json()) as Response
}
