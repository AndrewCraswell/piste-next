import {
  FormSection,
  MemberDetailsCard,
  PistePanel,
  MemberLookupField,
} from "$components"
import { useUpdateFencerByIdMutation } from "$queries"
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

// TODO: Determine if account is already linked and prevent saving

export const LinkAssociationPanel: React.FunctionComponent<
  ILinkAssociationPanelProps
> = ({ fencerId, onClose, onSaved, isOpen }) => {
  const [member, setMember] = useState<AssociationMember | undefined>()

  const [linkAccount, { data }] = useUpdateFencerByIdMutation()

  const onLinkClicked = useCallback(() => {
    linkAccount({
      variables: {
        fencerId,
        changes: {
          AssociationMemberId: member?.AssociationMemberId,
        },
      },
      onCompleted: () => {
        onSaved(member?.AssociationMemberId)
        setMember(undefined)
        onClose()
      },
    })
  }, [fencerId, linkAccount, member?.AssociationMemberId, onClose, onSaved])

  const onMemberLookupChange = useCallback((members) => {
    if (members.length) {
      setMember(members[0])
    } else {
      setMember(undefined)
    }
  }, [])

  const onRenderFooterContent = useCallback(
    () => (
      <FluentProvider>
        <PanelFooter>
          <Button appearance="primary" onClick={onLinkClicked}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </PanelFooter>
      </FluentProvider>
    ),
    [onClose, onLinkClicked]
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

          <MemberLookupField itemLimit={1} onChange={onMemberLookupChange} />

          {member && (
            <MemberDetailsCard
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
          )}
        </FormSection>
      </FluentProvider>
    </PistePanel>
  )
}
