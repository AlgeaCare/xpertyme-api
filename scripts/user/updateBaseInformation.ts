// just some little tests so we can test it while developing locally in ts-node
import { updateBaseInformation } from '../../src/user/update-base-information'

const run = async () => {
  // this is asif on staging, change him back to Asif Rasool if you mess with him 😇
  const uuid = '7de6daae-409f-49a3-a903-9e2be45d4dc0'
  const user = await updateBaseInformation({
    uuid,
    firstName: 'Asif',
    lastName: 'Rasool'
  })
  console.log(user)
}

run()
