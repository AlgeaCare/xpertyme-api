import { apiRoot } from '.'
import { xpertymeApi } from '../api'

export const deleteUser = async (uuid: string) => {
  const apiCall = await xpertymeApi(`${apiRoot}/user/${uuid}`)
  const result = await apiCall
    .delete()
    .error(404, () => {
      throw new Error('user not found to delete')
    })
    .error(409, () => {
      throw new Error('user has dependencies')
    })
    .error(410, () => {
      throw new Error('user already removed')
    })
    .res()

  return await result.json()
}
