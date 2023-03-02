import { apiRoot } from '.'
import { xpertymeApi } from '../api'

export const deleteUser = async (uuid: string) => {
  const apiCall = await xpertymeApi(`${apiRoot}/user/${uuid}`)
  const res = await apiCall.delete().res()
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('user not found to delete')
    }
    if (res.status === 409) {
      throw new Error('user has dependencies')
    }
    if (res.status === 410) {
      throw new Error('user already removed')
    }
    console.error(res.body)
    throw new Error('unknown error!')
  }
  return (await res.json()) as unknown
}
