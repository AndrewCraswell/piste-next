import {
  DefaultButton,
  Dialog,
  DialogFooter,
  DialogType,
  IButtonProps,
  Icon,
  PrimaryButton,
  Stack,
} from "@fluentui/react"
import { Avatar, Badge } from "@fluentui/react-components"
import dayjs from "dayjs"

import { EditFencerDialog, VerticalCard } from "$components"
import {
  GetAccountFencersDocument,
  useDeleteFencerByIdMutation,
  useUpdateFencerByIdMutation,
} from "$queries"
import { DetailsItem } from "./components"
import { useCallback, useMemo } from "react"
import { useDisclosure } from "$hooks"
import {
  CardHeader,
  BadgeContainer,
  DetailsStack,
  EmbedDialog,
  SemiboldText,
  DialogSpinner,
} from "./FencerCard.styles"
import { AccountFencer } from "./FencerCard.types"

export interface IFencerCardProps {
  fencer: AccountFencer
  primaryFencerId?: string
}

export const FencerCard: React.FunctionComponent<IFencerCardProps> = ({
  fencer,
  primaryFencerId,
}) => {
  const {
    AssociationMemberId,
    Email,
    Birthdate,
    FirstName,
    LastName,
    Phone,
    AvatarUrl,
    StudentId,
    Oid,
  } = fencer

  const {
    isOpen: isDeleteDialogOpen,
    onOpen: onDeleteDialogOpen,
    onClose: onDeleteDialogClose,
  } = useDisclosure(false)

  const {
    isOpen: isEditFencerDialogOpen,
    onClose: onCloseEditFencerDialog,
    onOpen: onOpenEditFencerDialog,
  } = useDisclosure(false)

  const [deleteFencer, { loading: isDeletingFencer }] =
    useDeleteFencerByIdMutation({
      refetchQueries: [
        {
          query: GetAccountFencersDocument,
          variables: {
            oid: Oid,
          },
        },
      ],
      onCompleted: onDeleteDialogClose,
    })

  const [editFencer, { loading: isSavingFencer }] = useUpdateFencerByIdMutation(
    {
      refetchQueries: [
        {
          query: GetAccountFencersDocument,
          variables: {
            oid: Oid,
          },
        },
      ],
      onCompleted: onCloseEditFencerDialog,
    }
  )

  const fullName = `${FirstName} ${LastName}`
  const formattedBirthDate = dayjs(Birthdate).format("MMM D, YYYY")
  const age = new Date().getFullYear() - dayjs(Birthdate).year()
  const formattedEmail = Email || "N/A"
  const formattedPhone = Phone ? formatPhoneNumber(Phone) : "N/A"
  const formattedAvatar = AvatarUrl ? { src: AvatarUrl } : undefined
  const isLinked = !!AssociationMemberId
  const isPrimaryFencer = StudentId === primaryFencerId
  const memberId = `#${AssociationMemberId}`

  const onEditFencerClicked = useCallback(
    (fencer) => {
      editFencer({
        variables: {
          fencerId: StudentId,
          changes: fencer,
        },
      })
    },
    [StudentId, editFencer]
  )

  const onDeleteFencerConfirmed = useCallback(() => {
    deleteFencer({
      variables: { fencerId: StudentId },
    })
  }, [deleteFencer, StudentId])

  const onEditAssociationClicked = useCallback(() => {}, [])

  const fencerActions = useMemo(
    () =>
      [
        // Don't allow the user to edit the primary fencer
        !isPrimaryFencer
          ? {
              iconProps: { iconName: "Edit" },
              onClick: onOpenEditFencerDialog,
            }
          : undefined,
        {
          iconProps: { iconName: "ContactLink" },
        },

        // Don't allow the user to delete the primary fencer
        !isPrimaryFencer
          ? {
              iconProps: { iconName: "Delete" },
              onClick: onDeleteDialogOpen,
            }
          : undefined,
      ].filter(Boolean) as IButtonProps[],
    [isPrimaryFencer, onOpenEditFencerDialog, onDeleteDialogOpen]
  )

  return (
    <>
      <VerticalCard actions={fencerActions}>
        <CardHeader>
          <BadgeContainer>
            {isPrimaryFencer === true && (
              <Badge
                color="brand"
                icon={<Icon iconName="Contact" />}
                size="large"
              >
                Primary
              </Badge>
            )}
          </BadgeContainer>

          <Stack horizontal horizontalAlign="center">
            <Avatar name={fullName} size={96} image={formattedAvatar} />
          </Stack>
        </CardHeader>

        <DetailsStack tokens={{ childrenGap: "0.75rem" }}>
          <DetailsItem
            iconName="ContactInfo"
            iconLabel="Full name"
            title={fullName}
          >
            {fullName}
          </DetailsItem>

          <DetailsItem
            iconName="BirthdayCake"
            iconLabel="Birthdate"
            title={formattedBirthDate}
          >
            {formattedBirthDate} ({age})
          </DetailsItem>

          {isLinked ? (
            <DetailsItem
              iconName="ContactLink"
              iconLabel="USA Fencing ID"
              title={memberId}
              badgeProps={{ status: "available" }}
            >
              {memberId}
            </DetailsItem>
          ) : (
            <DetailsItem
              iconName="ContactLink"
              iconLabel="USA Fencing ID"
              title="Not linked"
            >
              Not linked
            </DetailsItem>
          )}

          <DetailsItem
            iconName="Phone"
            iconLabel="Phone number"
            title={formattedPhone}
          >
            {formattedPhone}
          </DetailsItem>

          <DetailsItem
            iconName="Mail"
            iconLabel="Email address"
            title={formattedEmail}
          >
            {formattedEmail}
          </DetailsItem>
        </DetailsStack>
      </VerticalCard>

      <EmbedDialog>
        {/* TODO: Migrate this into ConfirmFencerDeleteDialog component */}
        <Dialog
          hidden={!isDeleteDialogOpen}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: `Delete fencer?`,
            subText: (
              <span>
                Are you sure you want to permanently delete{" "}
                <SemiboldText>{`${FirstName} ${LastName}`}</SemiboldText>?
              </span>
            ) as unknown as string,
            closeButtonAriaLabel: "Close",
          }}
        >
          <DialogFooter>
            {isDeletingFencer && <DialogSpinner />}
            <PrimaryButton
              onClick={onDeleteFencerConfirmed}
              disabled={isDeletingFencer}
            >
              Delete
            </PrimaryButton>
            <DefaultButton
              onClick={onDeleteDialogClose}
              disabled={isDeletingFencer}
            >
              Cancel
            </DefaultButton>
          </DialogFooter>
        </Dialog>
        <EditFencerDialog
          fencer={{
            FirstName,
            LastName,
            Birthdate: dayjs(Birthdate).toDate(),
            Email: Email ?? undefined,
            Phone: Phone ?? undefined,
          }}
          isOpen={isEditFencerDialogOpen}
          onClose={onCloseEditFencerDialog}
          onSaved={onEditFencerClicked}
        />
      </EmbedDialog>
    </>
  )
}

function formatPhoneNumber(phoneNumber: string) {
  var cleaned = phoneNumber.replace(/\D/g, "")
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = match[1] ? "+1 " : ""
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("")
  }
  return phoneNumber
}
