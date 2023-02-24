// just some little tests so we can test it while developing locally in ts-node
import { users } from '../../src/reporting/users'

const run = async () => {
  const experts = await users('experts')
  console.log(experts)
}

run()
