import {
  Accordion,
  AccordionHeader,
  AccordionItem,
} from "@fluentui/react-components"

import { IndentedAccordionPanel, TabText } from "$components"
import { CalendarLinker } from "./components"
import { AssociationMembershipLinker } from "./AssociationMembershipLinker"

export const ConnectionsManager: React.FunctionComponent = () => {
  // TODO: Add check for user role

  return (
    <div style={{ maxWidth: 600 }}>
      <TabText block>Manage external connections to your account.</TabText>
      <Accordion collapsible multiple defaultOpenItems="membership">
        <AccordionItem value="membership">
          <AccordionHeader size="large">Association membership</AccordionHeader>
          <IndentedAccordionPanel>
            <AssociationMembershipLinker />
          </IndentedAccordionPanel>
        </AccordionItem>
        <AccordionItem value="calendar">
          <AccordionHeader size="large">Calendar</AccordionHeader>
          <IndentedAccordionPanel>
            <CalendarLinker />
          </IndentedAccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
