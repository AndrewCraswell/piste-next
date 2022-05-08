import type { NextPage } from "next"
import { Pivot, PivotItem } from "@fluentui/react"
import {
  TabList,
  Tab,
  TabValue,
  SelectTabData,
  SelectTabEvent,
} from "@fluentui/react-components/unstable"
import styled from "@emotion/styled"

import {
  ElementsProvider,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
  PaymentMethodCard,
  FencersManager,
} from "$components"
import { useTitle } from "$hooks"
import { useGetPaymentMethodsQuery } from "$store"
import { useState } from "react"

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

  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")

  const [selectedTab, setSelectedTab] = useState<TabValue>("contact")
  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value)
  }

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>

      <ProfileTabs selectedValue={selectedTab} onTabSelect={onTabSelect}>
        <Tab value="contact">Contact</Tab>
        {/* <Tab value="account">Account</Tab>
        <Tab value="notifications">Notifications</Tab> */}
        <Tab value="payment">Payment</Tab>
        <Tab value="fencers">Fencers</Tab>
      </ProfileTabs>

      {selectedTab === "contact" && <ProfileForm />}
      {selectedTab === "account" && <></>}
      {selectedTab === "notifications" && <></>}
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
