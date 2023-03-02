import { xpertymeApi } from '../api'
import { paths } from '../../schemas/calendar/schema'
import { apiRoot } from '.'

type Path = paths['/api/calendarManager/v0/{calendar}/events/']['post']
// type Payload = Path['parameters']['body']
type Response = Path['responses']['200']['schema']

export const createEvent = async ({
  payload,
  calendarId
}: {
  // the types in the schema are wrong :/
  payload: unknown
  calendarId: string
}) => {
  const apiCall = await xpertymeApi(`${apiRoot}/${calendarId}/events`)
  const res = await apiCall.post(payload).res()
  if (!res.ok) {
    console.error(res.body)
    throw new Error('unknown error!')
  }
  return (await res.json()) as Response
}
