import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  Text,
} from "@fluentui/react-components"
import utc from "dayjs/plugin/utc"
import { MessageBar, MessageBarButton, MessageBarType } from "@fluentui/react"
import dayjs from "dayjs"

import { IndentedAccordionPanel, LinkButton, TabText } from "$components"
import { useAccountProfile } from "$hooks"
import { useCallback } from "react"
import { useLazyDeleteCalendarQuery } from "$store"

dayjs.extend(utc)

export const ConnectionsManager: React.FunctionComponent = () => {
  const {
    account: { UserId, Email, isCalendarLinked, calendar },
    loading: isProfileLoading,
    refetch: refetchAccount,
  } = useAccountProfile()

  // TODO: Add Usa Fencing linking
  // TODO: Add check for user role
  const [deleteCalendar, { isLoading: isUnlinking }] =
    useLazyDeleteCalendarQuery()

  const getCalendarLinkingUri = useCallback(() => {
    return `/api/scheduling/connect/?userId=${UserId ?? ""}&login_hint=${
      Email ?? ""
    }`
  }, [Email, UserId])

  return (
    <div style={{ maxWidth: 600 }}>
      <TabText block>Manage external connections to your account.</TabText>
      <Accordion collapsible defaultOpenItems="membership">
        <AccordionItem value="membership">
          <AccordionHeader size="large">Association membership</AccordionHeader>
          <IndentedAccordionPanel></IndentedAccordionPanel>
        </AccordionItem>
        {!isProfileLoading && (
          <AccordionItem value="calendar">
            <AccordionHeader size="large">Calendar</AccordionHeader>
            <IndentedAccordionPanel>
              <Text block style={{ marginBottom: "1rem" }}>
                Connect to your calendar to enable appointment bookings during
                available hours.
              </Text>
              {isCalendarLinked ? (
                <MessageBar
                  messageBarType={MessageBarType.success}
                  isMultiline={false}
                  actions={
                    <MessageBarButton
                      disabled={isProfileLoading || isUnlinking}
                      onClick={async () => {
                        if (calendar?.id) {
                          await deleteCalendar({ accountId: calendar?.id })
                          await refetchAccount()
                        }
                      }}
                    >
                      Unlink
                    </MessageBarButton>
                  }
                >
                  Your {titleCase(calendar?.provider)} calendar was linked on{" "}
                  {dayjs
                    .utc(calendar?.created_at)
                    .local()
                    .format("MMM DD, YYYY")}
                  .
                </MessageBar>
              ) : (
                <LinkButton appearance="primary" href={getCalendarLinkingUri()}>
                  Link calendar
                </LinkButton>
              )}
            </IndentedAccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}

function titleCase(value: string = "") {
  let str = value.toLowerCase().split(" ")
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")
}
