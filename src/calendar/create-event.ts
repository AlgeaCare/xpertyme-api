import { xpertymeApi } from '../api'
import { apiRoot } from '.'
import { XPTGender } from '../types'

type Payload = {
  eventType: 'personal'
  userUuid: string
  startDate: string
  endDate: string
  status: number
  pause: number
  isForFirstConsultation: boolean
  visitReasonTemplate: string
  noShow: boolean
  genderCode: XPTGender
  notes?: string
  serviceTypeCodes: [string]
  addressUuid?: string
}

type Response = {
  serviceTypeCodes: [string]
  members: [
    {
      serviceTypeCode?: string
      userUuid: string
      id: number
      invitation: {
        startLink: string
        cancelLink: string
        firstName?: string
        lastName?: string
        birthday?: string
        genderCode: string
      }
    }
  ]
  id: string
  startDate: string
  endDate: string
  status: number
  cancelMessage?: string
  cancellationReason?: string
  dateCanceled?: string
  addressUuid?: string
  canceledMember?: string
  visitReason: { uuid: string; formatType: number }
  notes?: string
  noShow: boolean
}

export const createEvent = async ({
  payload,
  calendarId
}: {
  payload: Payload
  calendarId: string
}) => {
  const apiCall = await xpertymeApi(`${apiRoot}/${calendarId}/events/`)
  const res = await apiCall.post(payload).res()

  return (await res.json()) as Response
}
