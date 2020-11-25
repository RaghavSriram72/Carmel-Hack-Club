const DAYS_IN_WEEK = 7
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24
const TARGET_DAY = 3

const DATE_FORMAT_YEAR = new Intl.DateTimeFormat('en-US', { year: 'numeric' })
const DATE_FORMAT_MONTH = new Intl.DateTimeFormat('en-US', { month: 'short' })
const DATE_FORMAT_DAY = new Intl.DateTimeFormat('en-US', { day: 'numeric' })

const getDateOffset = date => {
    const offset = TARGET_DAY - date.getDay()
    return (offset < 0 ? DAYS_IN_WEEK : 0) + offset
}

const formatDate = date =>
    `${DATE_FORMAT_MONTH.format(date)} ${DATE_FORMAT_DAY.format(date)}, ${DATE_FORMAT_YEAR.format(date)}`

const date = new Date()
date.setMilliseconds(date.getMilliseconds() + getDateOffset(date) * MILLISECONDS_IN_DAY)

document.getElementById('meeting-day').innerHTML = formatDate(date)
