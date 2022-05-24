import type { NextPage } from "next"
import { TabList, Tab } from "@fluentui/react-components"
import styled from "@emotion/styled"

import {
  PageTitle,
  ProfileForm,
  FencersManager,
  ConnectionsManager,
  PaymentMethodsManager,
} from "$components"
import { useTabs, useTitle } from "$hooks"

const ProfileTabs = styled(TabList)`
  margin-bottom: 1rem;
`

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const { onTabSelected, selectedTab } = useTabs(params.tab || "profile")

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
      {selectedTab === "payment" && <PaymentMethodsManager />}
      {selectedTab === "fencers" && <FencersManager />}
    </>
  )
}

export default Profile
