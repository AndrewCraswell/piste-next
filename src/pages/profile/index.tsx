import type { NextPage } from "next"
import { Pivot, PivotItem } from "@fluentui/react"
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

const ProfilePivot = styled(Pivot)`
  margin-top: 1rem;

  div[role="tabpanel"] {
    margin-top: 1rem;
  }
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

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>

      <ProfilePivot>
        <PivotItem headerText="Contact">
          <ProfileForm />
        </PivotItem>
        <PivotItem headerText="Account"></PivotItem>
        <PivotItem headerText="Notifications"></PivotItem>
        <PivotItem headerText="Payment">
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
        </PivotItem>
        <PivotItem headerText="Fencers">
          <FencersManager />
        </PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile
