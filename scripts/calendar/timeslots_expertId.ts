// just some little tests so we can test it while developing locally in ts-node
import { fetchTimeslots } from '../../src/calendar/timeslots'

const run = async () => {
  const start = performance.now();
  const slots = await fetchTimeslots({
    expertId: '38f667ab-da33-4f53-a22e-d0212bc53ffd',
    category: 19,
    dateEnd: new Date('2025-7-28'),
    dateStart: new Date('2025-5-5'),
    serviceType: 'statutory',
    visitingReasonTemplate: 'faba55be-a9f8-489d-92be-d4a21208b4f3'
  })
  const end = performance.now();
  const durationInSeconds = (end - start) / 1000;
  console.log(slots)
  console.log(`Function took ${durationInSeconds.toFixed(3)} seconds.`);
}

run()
