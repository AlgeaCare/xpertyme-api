import { xpertymeApi } from '../api'
import { definitions } from '../../schemas/reporting/schema'
import { apiRoot } from '.'

type UserType = 'all' | 'experts' | 'client'

export const users = async (userType: UserType = 'all') => {
  const apiCall = await xpertymeApi(`${apiRoot}/users?usersType=${userType}`)
  return apiCall
    .get()
    .res(async (r) => (await r.json()) as definitions['User2'][])
}
