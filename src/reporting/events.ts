import { xpertymeApi } from '../api'
import { paths } from '../../schemas/reporting/schema'
import { apiRoot } from '.'

type Path = paths['/api/reportingManager/v0/calendarEvents/personal']['get']
type Payload = Path['parameters']['query']
type Response = Path['responses']['200']['schema']

export const events = async ({
  eventStatus = 'all',
  page,
  perPage,
  dateFrom,
  dateTo
}: Payload) => {
  const apiCall = await xpertymeApi(
    `${apiRoot}/calendarEvents/personal?eventStatus=${eventStatus}&page=${page}&perPage=${perPage}&dateFrom=${dateFrom}&dateTo=${dateTo}`
  )
  const res = await apiCall.get().res()

  return (await res.json()) as Response
}
