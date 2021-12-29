import { HorizontalCard } from "../HorizontalCard"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { Text, Persona, FontWeights } from "@fluentui/react"

// TODO: Pass in Member data

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
    <Text
      variant="xSmall"
      styles={{ root: { fontWeight: FontWeights.semibold } }}
    >
      {title}
    </Text>
    <Text variant="small">{value}</Text>
  </li>
)

const ThinCard = styled(HorizontalCard)`
  padding: ${({ theme }) => theme.spacing.s1};
  width: 100%;
  max-width: 280px;
`

export interface IMemberDetailItemProps {
  title: string
  value: string
}

export const MemberDetailsCard: React.FunctionComponent<IStyleableProps> = ({
  className,
}) => {
  return (
    <ThinCard
      className={className}
      actions={[
        {
          iconProps: { iconName: "Add" },
        },
        {
          iconProps: { iconName: "Calendar" },
        },
      ]}
    >
      <Persona
        text="Andrew Craswell"
        secondaryText="Kaizen Academy"
        showSecondaryText
      />
      <MemberDetailsList>
        <MemberDetailItem title="Member Id" value="100067485" />
        <MemberDetailItem title="Expiration" value="6/15/2022" />
        <MemberDetailItem title="Birthdate" value="4/09/1992" />
        <MemberDetailItem title="Foil" value="U" />
        <MemberDetailItem title="Epee" value="B26" />
        <MemberDetailItem title="Sabre" value="U" />
      </MemberDetailsList>
    </ThinCard>
  )
}
