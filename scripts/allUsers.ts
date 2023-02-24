// just some little tests so we can test it while developing locally in ts-node
import { allUsers } from '../src/all-users'

const run = async () => {
  const users = await allUsers('experts')
  console.log(users)
}

run()
