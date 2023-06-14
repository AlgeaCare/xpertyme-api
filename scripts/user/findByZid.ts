// just some little tests so we can test it while developing locally in ts-node
import { findByZid } from '../../src/user/find-by-zid'

const run = async () => {
  try {
    const user = await findByZid('Z71271684289048')
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

run()
