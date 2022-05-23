import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import localizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(utc)
dayjs.extend(localizedFormat)

export function formatLocalTime(time: dayjs.ConfigType, template?: string) {
  return dayjs.utc(time).local().format(template)
}

export function formatLocalLocalizedTime(
  time: dayjs.ConfigType,
  template?: string
) {
  return dayjs.utc(time).local().format(template)
}
