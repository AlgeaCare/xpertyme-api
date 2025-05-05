import { cancelEvent } from './cancel-event'
import { confirmEvent } from './confirm-event'
import { createEvent } from './create-event'
import { timeslots, fetchTimeslots } from './timeslots'

// api we export
export default {
  createEvent,
  cancelEvent,
  confirmEvent,
  timeslots,
  fetchTimeslots,
}
