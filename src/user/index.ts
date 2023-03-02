import { create } from './create'
import { deleteUser } from './delete'
import { get } from './get'
import { upgradeToExpert } from './upgrade-to-expert'

export const apiRoot = 'userManager/v0'

// api we export
export default {
  get,
  create,
  upgradeToExpert,
  deleteUser
}
