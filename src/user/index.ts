import { create } from './create'
import { deleteUser } from './delete'
import { get } from './get'
import { upgradeToExpert } from './upgrade-to-expert'
import { findByEmail } from './find-by-email'
import { findByZid } from './find-by-zid'
import { updateBaseInformation } from './update-base-information'

export const apiRoot = 'userManager/v0'

// api we export
export default {
  get,
  create,
  upgradeToExpert,
  deleteUser,
  findByEmail,
  findByZid,
  updateBaseInformation
}
