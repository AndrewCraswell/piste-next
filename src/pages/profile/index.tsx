import type { NextPage } from "next"
import {
  ElementsProvider,
  FencerCard,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
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
          {paymentMethods?.map(({ card, id }) => (
            <div key={id} style={{ margin: "16px 0" }}>
              <span>{card?.brand}</span> <span>{card?.last4}</span>{" "}
              <span>{`${card?.exp_month}/${card?.exp_year}`}</span>
            </div>
          ))}
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
          </FencersGrid>
        </PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile
