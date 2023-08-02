// just some little tests so we can test it while developing locally in ts-node
import { users } from '../../src/reporting/users'

const run = async () => {
  const experts = await users({ usersType: 'all', page: 1, perPage: 10 })
  console.log(experts)
}

run()
