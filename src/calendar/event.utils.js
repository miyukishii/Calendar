let todayStr = new Date().toISOString().replace(/T.*$/, '')
let tuesdayStr = new Date(2023, 4, 23).toISOString().replace(/T.*$/, '')
let wednesdayStr = new Date(2023, 4, 24).toISOString().replace(/T.*$/, '')
let fridayStr = new Date(2023, 4, 26).toISOString().replace(/T.*$/, '')

export const INITIAL_EVENTS = [
  {
    id: 1,
    title: `VT ${Math.floor(10000 + Math.random() * 90000)}`,
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T16:30:00'
  },
  {
    id: 2,
    title: `VT ${Math.floor(10000 + Math.random() * 90000)}`,
    start: todayStr + 'T12:00:00'
  },
  {
    id: 3,
    title: `VT ${Math.floor(10000 + Math.random() * 90000)}`,
    start: fridayStr + 'T12:00:00',
    end: fridayStr + 'T14:30:00'
  },
  {
    id: 4,
    title: `VT ${Math.floor(10000 + Math.random() * 90000)}`,
    start: tuesdayStr + 'T12:00:00',
    end: tuesdayStr + 'T14:30:00'
  },
  {
    id: 5,
    title: `VT ${Math.floor(10000 + Math.random() * 90000)}`,
    start: wednesdayStr + 'T06:00:00',
    end: wednesdayStr + 'T10:30:00'
  }
]

