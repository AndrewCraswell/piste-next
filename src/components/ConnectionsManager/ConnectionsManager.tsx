import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  Button,
  Text,
} from "@fluentui/react-components"

import { IndentedAccordionPanel, TabText } from "$components"
import { useAccountProfile } from "$hooks"
import { useCallback } from "react"
import { MessageBar, MessageBarButton, MessageBarType } from "@fluentui/react"

export const ConnectionsManager: React.FunctionComponent = () => {
  const {
    account: { UserId, Email, isSchedulerLinked },
    loading: isProfileLoading,
  } = useAccountProfile()

  const redirectToScheduler = useCallback(() => {
    window.location.href = `/api/scheduling/connect/?userId=${
      UserId ?? ""
    }&login_hint=${Email ?? ""}`
  }, [Email, UserId])

  // TODO: Add Usa Fencing linking
  // TODO: Add check for user role

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
              {isSchedulerLinked ? (
                <MessageBar
                  messageBarType={MessageBarType.success}
                  isMultiline={false}
                  actions={<MessageBarButton>Unlink</MessageBarButton>}
                >
                  Your calendar was linked on DATE.
                </MessageBar>
              ) : (
                <Button appearance="primary" onClick={redirectToScheduler}>
                  Link calendar
                </Button>
              )}
            </IndentedAccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}
