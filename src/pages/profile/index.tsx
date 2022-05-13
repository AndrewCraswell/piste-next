import type { NextPage } from "next"
import { TabList, Tab } from "@fluentui/react-components/unstable"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  Button,
  Text,
} from "@fluentui/react-components"
import styled from "@emotion/styled"

import {
  ElementsProvider,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
  PaymentMethodCard,
  FencersManager,
  IndentedAccordionPanel,
  TabText,
} from "$components"
import { useAccountProfile, useTabs, useTitle } from "$hooks"
import { useGetPaymentMethodsQuery } from "$store"
import { useCallback, useState } from "react"

// TODO: Move payments logic into a separate component

const ProfileTabs = styled(TabList)`
  margin-bottom: 1rem;
`

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, 292px);
`

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const { onTabSelected, selectedTab, setTab } = useTabs(
    params.tab || "profile"
  )

  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>

      <ProfileTabs selectedValue={selectedTab} onTabSelect={onTabSelected}>
        <Tab value="profile">Profile</Tab>
        <Tab value="connections">Connections</Tab>
        {/* <Tab value="account">Account</Tab>
        <Tab value="notifications">Notifications</Tab> */}
        <Tab value="payment">Payment</Tab>
        <Tab value="fencers">Fencers</Tab>
      </ProfileTabs>

      {selectedTab === "profile" && <ProfileForm />}
      {selectedTab === "connections" && <ConnectionsManager />}
      {/* {selectedTab === "account" && <></>}
      {selectedTab === "notifications" && <></>} */}
      {selectedTab === "payment" && (
        <>
          <PaymentMethodsGrid>
            {paymentMethods?.map(({ card, id, billing_details }, index) => {
              if (card) {
                return (
                  <PaymentMethodCard
                    key={id}
                    card={card}
                    themeIndex={index}
                    name={billing_details.name}
                    onEditClick={(event, card) => console.log("EDIT", card)}
                  />
                )
              } else {
                return null
              }
            })}
          </PaymentMethodsGrid>
          <ElementsProvider>
            <PaymentMethodForm />
          </ElementsProvider>
        </>
      )}
      {selectedTab === "fencers" && <FencersManager />}
    </>
  )
}

export default Profile

const ConnectionsManager: React.FunctionComponent = () => {
  const {
    account: { UserId, Email, isSchedulerLinked },
  } = useAccountProfile()

  const redirectToScheduler = useCallback(() => {
    console.log(UserId)
    window.location.href = `/api/scheduling/connect/?userId=${
      UserId ?? ""
    }&login_hint=${Email ?? ""}`
  }, [Email, UserId])

  return (
    <>
      <TabText block>Manage external accounts linked to your profile.</TabText>
      <Accordion collapsible defaultOpenItems="contact">
        <AccordionItem value="membership">
          <AccordionHeader size="large">Association membership</AccordionHeader>
          <IndentedAccordionPanel></IndentedAccordionPanel>
        </AccordionItem>
        <AccordionItem value="contact">
          <AccordionHeader size="large">Calendar</AccordionHeader>
          <IndentedAccordionPanel>
            <Text block style={{ marginBottom: "1rem" }}>
              Connect to your calendar to enable appointment bookings.
            </Text>
            {isSchedulerLinked ? (
              <span>Calendar is linked!</span>
            ) : (
              <Button appearance="primary" onClick={redirectToScheduler}>
                Link calendar
              </Button>
            )}
          </IndentedAccordionPanel>
        </AccordionItem>
        <AccordionItem value="address">
          <AccordionHeader size="large">Stripe Payments</AccordionHeader>
          <IndentedAccordionPanel></IndentedAccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
