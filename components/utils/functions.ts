export const capitalize = (t: string) => {
  return t.charAt(0).toUpperCase() + t.slice(1)
}

const units: any = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
}

const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
})

export const getRelativeTime = (d1: number, d2 = +new Date()) => {
  var elapsed = d1 - d2

  for (var u in units) {
    if (Math.abs(elapsed) > units[u] || u == 'second') {
      return rtf.format(Math.round(elapsed / units[u]), u as Intl.RelativeTimeFormatUnit)
    }
  }
}
