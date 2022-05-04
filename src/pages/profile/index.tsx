import type { NextPage } from "next"
import {
  AddFencerCard,
  ElementsProvider,
  FencerCard,
  PageTitle,
  PaymentMethodForm,
  ProfileForm,
  PaymentMethodCard,
  FencerForm,
  IProfileFormFields,
  IAddressFormFields,
  IFencerFormFields,
} from "$components"
import {
  useAccountProfile,
  useDisclosure,
  useFormHelpers,
  useTitle,
} from "$hooks"
import {
  DefaultButton,
  Dialog,
  DialogFooter,
  Pivot,
  PivotItem,
  PrimaryButton,
} from "@fluentui/react"
import styled from "@emotion/styled"
import { useGetPaymentMethodsQuery } from "$store"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback } from "react"
import { AccountProfileDocument, useAddFencerToAccountMutation } from "$queries"

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
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, 292px);
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
  const { account } = useAccountProfile()
  const {
    isOpen: isAddFencerDialogOpen,
    onClose: onCloseAddFencerDialog,
    onOpen: onOpenAddFencerDialog,
  } = useDisclosure(false)

  const { data: paymentMethods } =
    useGetPaymentMethodsQuery("cus_Kvm41gHVgqbeeS")
  const [addFencerToAccount, { data, loading, error }] =
    useAddFencerToAccountMutation({
      refetchQueries: (result) => [
        {
          query: AccountProfileDocument,
          variables: {
            oid: result.data?.insert_Students_one?.Oid,
          },
        },
      ],
      // updateQuery: (existing, incoming) => ({
      //   AssociationMembersLookup: [
      //     ...existing.AssociationMembersLookup,
      //     ...incoming.fetchMoreResult?.AssociationMembersLookup!,
      //   ],
      // }),
    })

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
          <div>
            <FencersGrid>
              {account.Dependents?.map((fencer) => (
                <FencerCard
                  key={fencer.StudentId}
                  fencer={fencer}
                  primaryFencerId={account.PrimaryStudentId}
                />
              ))}
              <AddFencerCard onClick={onOpenAddFencerDialog} />
            </FencersGrid>
            <AddFencerDialog
              isOpen={isAddFencerDialogOpen}
              onClose={onCloseAddFencerDialog}
              onSaved={(fencer: IFencerFormFields) => {
                addFencerToAccount({
                  variables: {
                    fencer,
                  },
                })
                onCloseAddFencerDialog()
              }}
            />
          </div>
        </PivotItem>
      </ProfilePivot>
    </>
  )
}

export default Profile

export interface IAddFencerDialogProps {
  isOpen?: boolean
  onSaved: (fencer: IFencerFormFields) => void
  onClose: () => void
}
export const AddFencerDialog: React.FunctionComponent<
  IAddFencerDialogProps
> = ({ isOpen, onClose, onSaved }) => {
  const form = useForm<IProfileFormFields>()
  const { sanitizePhone, sanitizeDate } = useFormHelpers(form)

  const { handleSubmit, formState, reset } = form

  const onFencerAdded: SubmitHandler<IFencerFormFields> = useCallback(
    (fencer) => {
      fencer.Phone = sanitizePhone(fencer.Phone)
      fencer.Birthdate = sanitizeDate(fencer.Birthdate)

      onSaved(fencer)
      reset()
    },
    [onSaved, reset, sanitizeDate, sanitizePhone]
  )

  const onDialogClose = useCallback(() => {
    reset()
    onClose()
  }, [onClose, reset])

  return (
    <Dialog
      hidden={!isOpen}
      dialogContentProps={{
        title: "Add new fencer",
        subText:
          "Add a new fencer to your profile. This student can be enrolled in lessons or classes, and be linked to an official association membership.",
        showCloseButton: true,
        onDismiss: onClose,
      }}
      maxWidth={500}
    >
      <form onSubmit={handleSubmit(onFencerAdded)}>
        <FencerForm form={form} />

        <DialogFooter>
          <PrimaryButton type="submit" disabled={!formState.isDirty}>
            Save
          </PrimaryButton>
          <DefaultButton onClick={onDialogClose}>Cancel</DefaultButton>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
