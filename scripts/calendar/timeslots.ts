// just some little tests so we can test it while developing locally in ts-node
import { timeslots } from '../../src/calendar/timeslots'

const run = async () => {
  const slots = await timeslots({
    expertId: '4ed21cae-919a-4a4b-9e62-b7880340cd12',
    category: 1,
    dateEnd: new Date('2023-09-31'),
    dateStart: new Date('2023-09-01'),
    serviceType: 'statutory',
    visitingReasonTemplate: 'c6251937-0e6b-486d-9698-fb883f496ec7'
  })

  console.log(slots)
}

run()
