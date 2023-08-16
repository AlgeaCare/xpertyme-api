import { xpertymeApi } from '../api'
import { paths } from '../../schemas/user/schema'
import { apiRoot } from '.'

type Path = paths['/api/userManager/v0/user/{uuid}/baseInformation']['patch']
type Payload = Path['parameters']['body']['body']
type Response = Path['responses']['200']['schema']

type GenderCode = 'female' | 'male' | 'diverse' | 'undefined'

export const updateBaseInformation = async ({
  uuid,
  withRetry = true,
  firstName,
  lastName,
  externalId,
  birthday,
  email,
  phone,
  genderCode
}: {
  uuid: string
  withRetry?: boolean
  firstName: string
  lastName: string
  externalId: string
  birthday?: string
  email?: string
  phone?: string
  genderCode?: GenderCode
}) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/user/${uuid}/baseInformation`,
    withRetry
  )
  const payload: Payload = {
    firstName,
    lastName,
    birthday,
    email,
    phone,
    externalId,
    genderCode
  }
  const res = await apiCall.patch(payload)

  return (await res.json()) as Response
}
