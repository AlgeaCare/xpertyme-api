import { xpertymeApi } from '../api'
import { definitions } from '../../schemas/reporting/schema'
import { apiRoot } from '.'

type UserType = 'all' | 'experts' | 'clients'

export const users = async (userType: UserType = 'all') => {
  const apiCall = await xpertymeApi(`${apiRoot}/users?usersType=${userType}`)
  const res = await apiCall.get().res()

  return (await res.json()) as definitions['User2'][]
}
