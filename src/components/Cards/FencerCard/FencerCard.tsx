import { VerticalCard } from "$components/Cards/VerticalCard"
import { IButtonProps, Icon, Stack } from "@fluentui/react"
import styled from "@emotion/styled"
import { Avatar, Badge } from "@fluentui/react-components"
import dayjs from "dayjs"
import {
  GetAccountFencersDocument,
  GetAccountFencersQuery,
  useDeleteFencerByIdMutation,
} from "$queries"
import { DetailsItem } from "./components"
import { useCallback, useMemo } from "react"

const CardHeader = styled.div`
  position: relative;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
  margin-bottom: 12px;
`

const BadgeContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
`

const DetailsStack = styled(Stack)`
  margin: 1.5rem 0 1rem 0;
`

export type AccountFencer = GetAccountFencersQuery["Students"][0]

export interface IFencerCardProps {
  fencer: AccountFencer
  primaryFencerId: string
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
    })

  const fullName = `${FirstName} ${LastName}`
  const formattedBirthDate = dayjs(Birthdate).format("MMM D, YYYY")
  const age = new Date().getFullYear() - dayjs(Birthdate).year()
  const formattedEmail = Email || "N/A"
  const formattedPhone = Phone ? formatPhoneNumber(Phone) : "N/A"
  const formattedAvatar = AvatarUrl ? { src: AvatarUrl } : undefined
  const isLinked = !!AssociationMemberId
  const isPrimaryFencer = StudentId === primaryFencerId
  const memberId = `#${AssociationMemberId}`

  const onEditFencerClicked = useCallback(() => {}, [])
  const onDeleteFencerClicked = useCallback(() => {
    deleteFencer({
      variables: { fencerId: StudentId },
    })
  }, [deleteFencer, StudentId])
  const onEditAssociationClicked = useCallback(() => {}, [])

  const fencerActions: IButtonProps[] = useMemo(
    () => [
      {
        iconProps: { iconName: "Edit" },
      },
      {
        iconProps: { iconName: "ContactLink" },
      },
      {
        iconProps: { iconName: "Delete" },
        onClick: onDeleteFencerClicked,
      },
    ],
    [onDeleteFencerClicked]
  )

  return (
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
  )
}

function formatPhoneNumber(phoneNumber: string) {
  var cleaned = phoneNumber.replace(/\D/g, "")
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = match[1] ? "+1 " : ""
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("")
  }
  return ""
}
