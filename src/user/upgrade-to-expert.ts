import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path =
  paths['/api/userManager/v0/user/{uuid}/upgradeSeekerToExpert']['post']
type Response = Path['responses']['200']['schema']

export const upgradeToExpert = async (uuid: string) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/user/${uuid}/upgradeSeekerToExpert`
  )
  const res = await apiCall
    .post()
    .error(404, () => {
      throw new Error('user not found with uuid')
    })
    .res()

  return (await res.json()) as Response
}
