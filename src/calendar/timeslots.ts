import { xpertymeApi } from '../api'
import { apiRoot } from './constants'
import { paths } from '../../schemas/calendar/schema'

type Path = paths['/api/calendarManager/v0/nba/{userUuid}/timeslots']['get']
type Response = Path['responses']['200']['schema']

/**
 * @deprecated The method should not be used
 */
export const timeslots = async ({
  expertId,
  withRetry = true,
  visitingReasonTemplate,
  dateStart,
  dateEnd,
  serviceType,
  category
}: {
  expertId: string
  withRetry?: boolean
  visitingReasonTemplate: string
  dateStart: Date
  dateEnd: Date
  serviceType: string
  // 1 for cbd 2 for thc for prod
  // 19 or 12 for staging
  category: number
}) => {
  const apiCall = await xpertymeApi(
    // https://booking.algeacare.com/api/calendarManager/v0/nba/:expert/timeslots?dateStart=2023-08-15T00%3A00%3A00%2B00%3A00&dateEnd=2023-08-28T00%3A00%3A00%2B00%3A00&serviceType=statutory&categories[]=19&visitReasonTemplate=c6251937-0e6b-486d-9698-fb883f496ec7
    `${apiRoot}/nba/${expertId}/timeslots?dateStart=${encodeURI(
      dateStart.toISOString()
    )}&dateEnd=${dateEnd.toISOString()}&serviceType=${serviceType}&categories[]=${category}&visitReasonTemplate=${visitingReasonTemplate}`,
    withRetry
  )
  const res = await apiCall.get().res()

  return (await res.json()) as Response
}
export const fetchTimeslots = async ({
  withRetry = true,
  visitingReasonTemplate,
  dateStart,
  dateEnd,
  serviceType,
  category,
  expertId
  }: {
  withRetry?: boolean
  visitingReasonTemplate: string
  dateStart: Date
  dateEnd: Date
  serviceType: string
  // 1 for cbd 2 for thc for prod
  // 19 or 12 for staging
  category: number,
  expertId?: string
}) => {
  const apiCall = await xpertymeApi(
    `api/calendarManager/v0/nba/${expertId ? expertId+'/' : ''}timeslots?dateStart=${encodeURI(
      dateStart.toISOString()
    )}&dateEnd=${dateEnd.toISOString()}&serviceType=${serviceType}&categories[]=${category}&visitReasonTemplate=${visitingReasonTemplate}`,
    withRetry
  )
  const res = await apiCall.get().res()

  return (await res.json()) as Response
}
