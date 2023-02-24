import { users } from './reporting/users'
import { create } from './user/create'

// make a list of all the apis and combine them all into one export
const reporting = {
  users
}
const user = {
  create
}

export { reporting, user }
