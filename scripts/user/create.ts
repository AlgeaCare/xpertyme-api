// just some little tests so we can test it while developing locally in ts-node
import { create } from '../../src/user/create'

const run = async () => {
  const user = await create({
    country: 'de',
    email: 'gareth.fuller@algeacare.com',
    firstName: 'Gareth',
    language: 'de',
    lastName: 'Fuller',
    emailVerified: true,
    externalId: 'hello there'
  })
  console.log(user)
}

run()
