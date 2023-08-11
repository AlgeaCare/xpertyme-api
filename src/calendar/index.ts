import { cancelEvent } from './cancel-event'
import { confirmEvent } from './confirm-event'
import { createEvent } from './create-event'
import { timeslots } from './timeslots'

export const apiRoot = 'calendarManager/v0'

// api we export
export default {
  createEvent,
  cancelEvent,
  confirmEvent,
  timeslots
}
