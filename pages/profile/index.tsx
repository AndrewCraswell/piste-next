import type { NextPage } from "next"
import { PageTitle, ProfileForm } from "$components"
import { useTitle } from "$hooks"
import { Pivot, PivotItem } from "@fluentui/react"
import styled from "@emotion/styled"

const ProfilePivot = styled(Pivot)`
  margin-top: 1em;

  div[role="tabpanel"] {
    margin-top: 1em;
  }
`

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      {/*
      <Text variant="mediumPlus">Manage your profile and settings.</Text> */}

      <ProfilePivot>
        <PivotItem headerText="Contact">
          <ProfileForm />
        </PivotItem>
        <PivotItem headerText="Account"></PivotItem>
        <PivotItem headerText="Notifications"></PivotItem>
        <PivotItem headerText="Payment"></PivotItem>
        <PivotItem headerText="Fencers"></PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile
