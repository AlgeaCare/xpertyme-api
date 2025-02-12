// just some little tests so we can test it while developing locally in ts-node
import { updateBaseInformation } from '../../src/user/update-base-information'

const run = async () => {
  // this is asif on staging, change him back to Asif Rasool if you mess with him 😇
  const uuid = '3391a7a5-7b40-455a-90a3-536c4f2954b4'
  const user = await updateBaseInformation({
    uuid,
    // firstName: 'newName',
    // lastName: 'Rocks',
    externalId: 'Z68358427901117',
    email: 'something-new@random.com',
    phone: '0000000000',
    genderCode: 'diverse',
    birthday: '1990-01-01'
  })
  console.log(user)
}

run()
