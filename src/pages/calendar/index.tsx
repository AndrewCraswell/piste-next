import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import type { NextPage } from "next"
import { useEffect } from "react"

const event = {
  event_title: "My Intro Meeting",
  event_description: "My test desc",
  slot_size: 15,
  participantEmails: ["arjun.k@nylas.com", "pooja.g@nylas.com"],
}

const NylasAvailability: React.FunctionComponent = () => {
  useEffect(() => import("@nylas/components-availability"), [])

  return (
    <nylas-availability
      allow-booking="true"
      //id="demo-availability"
      view_as="schedule"
      show_header="true"
      date_format="full"
      show_as_week="true"
      show_weekends="true"
      show_ticks="true"
      //access_token="TQq1NTr6DdG6KNqcKMnoJry0Rd9KLA"
    />
  )
}

export const Calendar: NextPage = () => {
  const pageTitle = "Calendar"
  useTitle(pageTitle)

  useEffect(() => {
    const component = document.querySelector<any>("nylas-availability")
    if (component) {
      //component.events = [event]
      //component.calendars = ["6skg7hx5fdtfy7ri69sqvuife"]

      component.start_hour = 8
      component.end_hour = 22
      component.dates_to_show = 7
      component.slot_size = 5
      component.event_buffer = 5
      component.max_book_ahead_days = 30
      component.open_hours = [
        {
          startWeekday: 1,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 2,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 3,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 4,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 5,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 6,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
        {
          startWeekday: 7,
          startHour: 9,
          startMinute: 0,
          endWeekday: 1,
          endHour: 22,
          endMinute: 0,
        },
      ]
      //component.reload()
    }
  }, [])

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <div style={{ width: "100%", height: "80vh" }}>
        <NylasAvailability />
      </div>
    </>
  )
}

export default Calendar
