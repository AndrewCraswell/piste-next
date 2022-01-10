import { HorizontalCard } from "../HorizontalCard"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { Persona } from "@fluentui/react"
import { Text } from "@fluentui/react-components"
import { useDisclosure } from "$hooks"
import dayjs from "dayjs"

const MemberDetailsList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    padding: 5px;

    span {
      display: block;
    }
  }
`

const MemberDetailItem: React.FunctionComponent<IMemberDetailItemProps> = ({
  title,
  value,
}) => (
  <li>
    <Text size={100} weight="semibold">
      {title}
    </Text>
    <Text size={200}>{value ?? "N/A"}</Text>
  </li>
)

const ThinCard = styled(HorizontalCard)`
  padding: ${({ theme }) => theme.spacing.s1};
  width: 100%;
`

const MemberPersona = styled(Persona)`
  max-width: 245px;
`

export interface IMemberDetailItemProps {
  title: string
  value?: string
}

export type MemberDetails = {
  fullName?: string
  secondaryText?: string
  memberId?: string
  membershipExpiration?: string
  birthdate?: number
  foilRating?: string
  epeeRating?: string
  sabreRating?: string
}

export interface IMemberDetailsCardProps extends IStyleableProps {
  details: MemberDetails
}
export const MemberDetailsCard: React.FunctionComponent<
  IMemberDetailsCardProps
> = ({ className, details }) => {
  const { isOpen: isAdded, onToggle: flipAdded } = useDisclosure(false)

  const {
    fullName,
    secondaryText,
    memberId,
    membershipExpiration,
    birthdate,
    foilRating,
    epeeRating,
    sabreRating,
  } = details

  return (
    <ThinCard
      className={className}
      actions={[
        {
          iconProps: { iconName: isAdded ? "SkypeCircleCheck" : "Add" },
          onClick: () => {
            flipAdded()
          },
        },
      ]}
    >
      <MemberPersona
        text={fullName}
        secondaryText={secondaryText}
        showSecondaryText
      />
      <MemberDetailsList>
        <MemberDetailItem title="Member Id" value={memberId} />
        <MemberDetailItem
          title="Expiration"
          value={dayjs(membershipExpiration).format("M/DD/YYYY")}
        />
        <MemberDetailItem title="Birthdate" value={birthdate?.toString()} />
        <MemberDetailItem title="Foil" value={foilRating} />
        <MemberDetailItem title="Epee" value={epeeRating} />
        <MemberDetailItem title="Sabre" value={sabreRating} />
      </MemberDetailsList>
    </ThinCard>
  )
}
