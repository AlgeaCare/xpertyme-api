import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path = paths['/api/userManager/v0/user/{uuid}/baseInformation']['post']
type Payload = Path['parameters']['body']['body']
type Response = Path['responses']['200']['schema']

export const updateBaseInformation = async ({
  uuid,
  withRetry = true,
  firstName,
  lastName
}: {
  uuid: string
  withRetry?: boolean
  firstName: string
  lastName: string
}) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/user/${uuid}/baseInformation`,
    withRetry
  )
  const payload: Payload = {
    firstName,
    lastName
  }
  const res = await apiCall.post(payload)

  return (await res.json()) as Response
}
