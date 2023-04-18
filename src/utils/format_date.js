import dayjs from "dayjs"

export function formatMonthday(date) {
  return dayjs(date).format("MM月DD日")
} 

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}