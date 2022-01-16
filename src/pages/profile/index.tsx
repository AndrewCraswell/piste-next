import type { NextPage } from "next"
import {
  AddFencerCard,
  ElementsProvider,
  FencerCard,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
  PaymentMethod,
} from "$components"
import { useAccountProfile, useTitle } from "$hooks"
import { Pivot, PivotItem } from "@fluentui/react"
import styled from "@emotion/styled"
import { useGetPaymentMethodsQuery } from "$store"

const ProfilePivot = styled(Pivot)`
  margin-top: 1rem;

  div[role="tabpanel"] {
    margin-top: 1rem;
  }
`

const FencersGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 280px));
`

const PaymentMethodsGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(246px, 246px));
`

// const items = [
//   {
//     key: "new",
//     text: "New",
//     iconProps: { iconName: "Add" },
//   },
//   {
//     key: "share",
//     text: "Share",
//     iconProps: { iconName: "Share" },
//   },
//   {
//     key: "download",
//     text: "Download",
//     iconProps: { iconName: "Download" },
//   },
// ]

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")

  const { account } = useAccountProfile()

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
                  <PaymentMethod
                    key={id}
                    card={card}
                    themeIndex={index}
                    name={billing_details.name}
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
          <FencersGrid>
            {account.Dependents?.map((fencer) => (
              <FencerCard
                key={fencer.StudentId}
                fencer={fencer}
                primaryFencerId={account.PrimaryStudentId}
              />
            ))}
            <AddFencerCard />
          </FencersGrid>
        </PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile
