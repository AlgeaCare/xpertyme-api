import { xpertymeApi } from '../api'
import { paths } from '../../schemas/calendar/schema'
import { apiRoot } from '.'

type Path =
  paths['/api/calendarManager/v0/nba/{calendar}/events/{personalCalendarEvent}/confirm']['post']
type Payload = Path['parameters']['body']
type Response = Path['responses']['200']['schema']

export const confirmEvent = async ({
  payload,
  calendarId,
  eventId
}: {
  payload: Payload
  calendarId: string
  eventId: string
}) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/nba/${calendarId}/events/${eventId}/confirm`
  )
  const res = await apiCall.post(payload).res()
  return (await res.json()) as Response
}
