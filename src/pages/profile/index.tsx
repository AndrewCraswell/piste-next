import type { NextPage } from "next"
import {
  ElementsProvider,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
} from "$components"
import { useTitle } from "$hooks"
import { Pivot, PivotItem } from "@fluentui/react"
import styled from "@emotion/styled"
import { useGetPaymentMethodsQuery } from "$store"

const ProfilePivot = styled(Pivot)`
  margin-top: 1em;

  div[role="tabpanel"] {
    margin-top: 1em;
  }
`

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")
  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      {/*
      <Text size={400}>Manage your profile and settings.</Text> */}

      <ProfilePivot>
        <PivotItem headerText="Contact">
          <ProfileForm />
        </PivotItem>
        <PivotItem headerText="Account"></PivotItem>
        <PivotItem headerText="Notifications"></PivotItem>
        <PivotItem headerText="Payment">
          <div>
            {paymentMethods?.map(({ card, id }) => (
              <div key={id} style={{ margin: "16px 0" }}>
                <span>{card?.brand}</span> <span>{card?.last4}</span>{" "}
                <span>{`${card?.exp_month}/${card?.exp_year}`}</span>
              </div>
            ))}
          </div>
          <ElementsProvider>
            <PaymentMethodForm />
          </ElementsProvider>
        </PivotItem>
        <PivotItem headerText="Fencers"></PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile
