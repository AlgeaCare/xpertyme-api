import { apiRoot } from '.'
import { paths } from '../../schemas/user/schema'
import { xpertymeApi } from '../api'

type UserResponse =
  paths['/api/userManager/v0/user/{uuid}']['get']['responses']['200']['schema']

export const get = async (uuid: string) => {
  const apiCall = await xpertymeApi(`${apiRoot}/user/${uuid}`)
  const res = await apiCall.get().res()
  if (!res.ok) {
    if (res.status === 400 || res.status === 404) {
      throw new Error('user not found')
    }
    console.error(res.body)
    throw new Error('unknown error!')
  }
  return (await res.json()) as UserResponse
}
