import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks"
import { useCreateComponentQuery } from "$store"
import { DOMAttributes, useEffect } from "react"

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }> &
  Element

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["nylas-availability"]: CustomElement<Manifest>
    }
  }
}

enum AvailabilityStatus {
  FREE = "free",
  BUSY = "busy",
  PARTIAL = "partial",
  CLOSED = "closed",
}

enum SelectionStatus {
  UNSELECTED = "unselected",
  SELECTED = "selected",
}

enum ClickAction {
  VERIFY = "verify",
  CHOOSE = "choose",
}

interface EventDefinition {
  event_title: string
  event_description: string
  event_location: string
  event_conferencing: string
  slot_size: 15 | 30 | 60
  participantEmails: string[]
  host_rules: HostRules
}

interface HostRules {
  method: "all" | "user_determined" | "random"
  host_count?: number
}

interface Manifest {
  allow_booking: boolean
  allow_date_change: boolean
  attendees_to_show: number
  availability: AvailabilityResponse
  booking_user_email: string
  booking_user_token: string
  busy_color: string
  calendars: Calendar[]
  capacity: number | null
  closed_color: string
  date_format: "full" | "weekday" | "date" | "none"
  dates_to_show: number
  end_hour: number
  event_buffer: number
  free_color: string
  mandate_top_of_hour: boolean
  max_book_ahead_days: number
  min_book_ahead_days: number
  open_hours: AvailabilityRule[]
  overbooked_threshold: number
  partial_bookable_ratio: number
  partial_color: string
  required_participants: string[]
  selected_color: string
  show_as_week: boolean
  show_header: boolean
  show_hosts: "show" | "hide"
  show_ticks: boolean
  show_weekends: boolean
  slot_size: 15 | 30 | 60
  start_date: Date
  start_hour: number
  view_as: "schedule" | "list"
  timezone: string
  unavailable_color: string
  events: EventDefinition[]
}

interface Availability {
  order: string[]
  time_slots: {
    emails: string[]
    end: number
    end_time: number
    start: number
    start_time: number
    status: AvailabilityStatus
  }
}

interface AvailabilityRule {
  startWeekday?: number
  startHour: number
  startMinute: number
  endWeekday?: number
  endHour: number
  endMinute: number
  timeZone?: string
}

interface Calendar {
  availability: AvailabilityStatus.FREE | AvailabilityStatus.BUSY
  timeslots: TimeSlot[]
  account: CalendarAccount
}

interface CalendarAccount {
  firstName: string
  lastName: string
  emailAddress: string
  avatarUrl: string
}

interface TimeSlot {
  start_time: Date
  end_time: Date
  available_calendars: string[]
  calendar_id?: string
  expirySelection?: string
  recurrence_cadence?: string
  recurrence_expiry?: Date | string
  fallsWithinAllowedTimeRange: boolean
}

interface PreDatedTimeSlot extends Omit<TimeSlot, "start_time" | "end_time"> {
  start_time: number
  end_time: number
  start?: number
  end?: number
  emails: string[] //present when round_robin property is set on request, which it always is in Availability
}

interface AvailabilityResponse {
  object: "availability"
  order: string[] //present when round_robin property is set on request, which it always is in Availability
  time_slots: PreDatedTimeSlot[]
}

interface OpenHours {
  emails: string[]
  days: number[]
  start: string
  end: string
  timezone: string
  object_type: "open_hours"
}

const NylasAvailability: React.FunctionComponent = () => {
  // @ts-ignore
  useEffect(() => import("@nylas/components-availability"), [])

  return (
    // @ts-ignore
    <nylas-availability
      allow-booking="true"
      view_as="schedule"
      date_format="full"
      id="demo-availability"
    />
  )
}

const CalendarPage: React.FunctionComponent = () => {
  const pageTitle = "Calendar"
  useTitle(pageTitle)

  // useEffect(() => {
  //   const component =
  //     document.querySelector<CustomElement<Manifest>>("nylas-availability")
  //   if (component) {
  //     // component.calendars = [
  //     //   {
  //     //     account: {
  //     //       emailAddress: "ajcraswell@gmail.com",
  //     //       firstName: "Andrew",
  //     //       lastName: "Craswell",
  //     //       avatarUrl: "",
  //     //     },
  //     //     availability: AvailabilityStatus.BUSY,
  //     //     timeslots: [
  //     //       {
  //     //         calendar_id: "6skg7hx5fdtfy7ri69sqvuife",
  //     //         available_calendars: [],
  //     //         end_time: dayjs("5/11/2022").add(14, "hours").toDate(),
  //     //         start_time: dayjs("5/11/2022").add(12, "hours").toDate(),
  //     //         fallsWithinAllowedTimeRange: true,
  //     //       },
  //     //     ],
  //     //   },
  //     // ]

  //     const event = {
  //       event_title: "My Intro Meeting",
  //       event_description: "My test desc",
  //       slot_size: 15,
  //       participantEmails: ["ajcraswell@gmail.com"],
  //     }

  //     component.events = [event]

  //     component.start_hour = 9
  //     component.end_hour = 21
  //     component.dates_to_show = 7
  //     component.slot_size = 15
  //     component.event_buffer = 5
  //     component.max_book_ahead_days = 30
  //     component.min_book_ahead_days = 0

  //     component.show_header = true
  //     component.show_as_week = true
  //     component.show_weekends = true
  //     component.show_ticks = true
  //     component.view_as = "schedule"
  //     component.capacity = 1
  //     component.start_date = new Date()

  //     // component.
  //     // component.
  //     // component.
  //     // component.

  //     // component.open_hours = [
  //     //   {
  //     //     startWeekday: 2,
  //     //     startHour: 14,
  //     //     startMinute: 0,
  //     //     endWeekday: 5,
  //     //     endHour: 20,
  //     //     endMinute: 30,
  //     //   },
  //     //   {
  //     //     startWeekday: 6,
  //     //     startHour: 9,
  //     //     startMinute: 0,
  //     //     endWeekday: 7,
  //     //     endHour: 21,
  //     //     endMinute: 0,
  //     //   },
  //     // ]
  //   }
  // }, [])

  //const { data } = useCreateComponentQuery("aa0s62mpdqybj4566yy1bl7zr")

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <div style={{ width: "100%", height: "80vh" }}>
        {/* <NylasAvailability /> */}
      </div>
    </>
  )
}

export default CalendarPage
