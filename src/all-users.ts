import { xpertymeApi } from './api'
import { definitions } from '../schemas/user/schema'

export const allUsers = async () => {
  const apiCall = await xpertymeApi('reportingManager/v0/users?usersType=all')
  return apiCall
    .get()
    .res(async (r) => (await r.json()) as definitions['User'][])
}
