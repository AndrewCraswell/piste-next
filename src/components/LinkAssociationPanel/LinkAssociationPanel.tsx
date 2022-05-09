import {
  FormSection,
  MemberDetailsCard,
  PistePanel,
  MemberLookupField,
} from "$components"
import { AssociationMember } from "$types"
import styled from "@emotion/styled"
import { DialogFooter } from "@fluentui/react"
import { Button, FluentProvider, Text } from "@fluentui/react-components"
import { useState, useCallback } from "react"

// TODO: Move this PanelFooter into another component file
export const PanelFooter = styled(DialogFooter)`
  .ms-Dialog-actionsRight {
    text-align: left;
  }

  .ms-Dialog-action:first-of-type {
    margin-left: 0;
  }
`

export interface ILinkAssociationPanelProps {
  fencerId: string
  isOpen?: boolean
  onSaved: (membershipId?: string) => void
  onClose: () => void
}

export const LinkAssociationPanel: React.FunctionComponent<
  ILinkAssociationPanelProps
> = ({ fencerId, onClose, onSaved, isOpen }) => {
  const [members, setMembers] = useState<AssociationMember[]>([])

  const onRenderFooterContent = useCallback(
    () => (
      <FluentProvider>
        <PanelFooter>
          <Button appearance="primary" onClick={onClose}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </PanelFooter>
      </FluentProvider>
    ),
    [onClose]
  )

  return (
    <PistePanel
      headerText="Link association account"
      isOpen={isOpen}
      isLightDismiss={true}
      isFooterAtBottom={true}
      onRenderFooterContent={onRenderFooterContent}
      onDismiss={onClose}
    >
      <FluentProvider>
        <FormSection>
          <Text>
            You must link your membership in order to get access to all Piste
            features.
          </Text>

          <MemberLookupField
            itemLimit={1}
            onChange={(members) => {
              setMembers(members)
            }}
          />

          {members.map((member) => (
            <MemberDetailsCard
              key={member.AssociationMemberId}
              details={{
                fullName: member.FullName,
                secondaryText:
                  member.Club1Name ||
                  member.Club2Name ||
                  member.Division ||
                  member.Birthdate.toString(),
                memberId: member.AssociationMemberId,
                membershipExpiration: member.Expiration,
                birthdate: member.Birthdate,
                foilRating: member.Foil,
                epeeRating: member.Epee,
                sabreRating: member.Saber,
              }}
            />
          ))}
        </FormSection>
      </FluentProvider>
    </PistePanel>
  )
}
