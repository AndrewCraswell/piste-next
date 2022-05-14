import {
  Accordion,
  AccordionHeader,
  AccordionItem,
} from "@fluentui/react-components"

import { IndentedAccordionPanel, TabText } from "$components"
import { useAccountProfile } from "$hooks"
import { CalendarLinker } from "./components"

export const ConnectionsManager: React.FunctionComponent = () => {
  const { loading: isProfileLoading } = useAccountProfile()

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
              <CalendarLinker />
            </IndentedAccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}
