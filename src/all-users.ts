import { xpertymeApi } from './api'
import { definitions } from '../schemas/user/schema'

type UserType = 'all' | 'experts' | 'client'

export const allUsers = async (userType: UserType = 'all') => {
  const apiCall = await xpertymeApi(
    `reportingManager/v0/users?usersType=${userType}`
  )
  return apiCall
    .get()
    .res(async (r) => (await r.json()) as definitions['User'][])
}
