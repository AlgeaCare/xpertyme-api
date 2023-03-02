import { cancelEvent } from './cancel-event'
import { confirmEvent } from './confirm-event'
import { createEvent } from './create-event'

export const apiRoot = 'calendarManager/v0'

// api we export
export default {
  createEvent,
  cancelEvent,
  confirmEvent
}
