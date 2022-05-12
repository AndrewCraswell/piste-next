import {
  FormSection,
  MemberDetailsCard,
  PistePanel,
  MemberLookupField,
  associationMemberToPersona,
} from "$components"
import {
  useSearchMembersByIdQuery,
  useUpdateFencerByIdMutation,
} from "$queries"
import { AssociationMember } from "$types"
import styled from "@emotion/styled"
import { DialogFooter } from "@fluentui/react"
import { Button, FluentProvider, Text } from "@fluentui/react-components"
import { useState, useCallback, useEffect, useRef } from "react"

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
  defaultFilter?: string
  associationId?: string
  isOpen?: boolean
  onSaved?: (membershipId?: string) => void
  onClose: () => void
}

// TODO: Determine if account is already linked and prevent saving

export const LinkAssociationPanel: React.FunctionComponent<
  ILinkAssociationPanelProps
> = ({ associationId, fencerId, defaultFilter, onClose, onSaved, isOpen }) => {
  const initialMember = useRef<AssociationMember>()
  const [member, setMember] = useState<AssociationMember | undefined>()

  const [linkAccount] = useUpdateFencerByIdMutation()
  const { data } = useSearchMembersByIdQuery({
    variables: {
      id: associationId!,
    },
    skip: !associationId,
    onCompleted: (data) => {
      const member = data.AssociationMembersLookup[0]
      initialMember.current = member
      if (member) {
        setMember(member)
      }
    },
  })

  const onLinkClicked = useCallback(() => {
    linkAccount({
      variables: {
        fencerId,
        changes: {
          AssociationMemberId: member?.AssociationMemberId || null,
        },
      },
      onCompleted: () => {
        if (onSaved) {
          onSaved(member?.AssociationMemberId)
        }
        setMember(member)
        initialMember.current = member
        onClose()
      },
    })
  }, [fencerId, linkAccount, member, onClose, onSaved])

  const onMemberLookupChange = useCallback((members) => {
    if (members.length) {
      setMember(members[0])
    } else {
      setMember(undefined)
    }
  }, [])

  const resetOnClose = useCallback(() => {
    setMember(initialMember.current)
    onClose()
  }, [onClose])

  const onRenderFooterContent = useCallback(
    () => (
      <FluentProvider>
        <PanelFooter>
          <Button appearance="primary" onClick={onLinkClicked}>
            Save
          </Button>
          <Button onClick={resetOnClose}>Cancel</Button>
        </PanelFooter>
      </FluentProvider>
    ),
    [onLinkClicked, resetOnClose]
  )

  useEffect(() => {
    if (associationId) {
    }
  }, [associationId])

  const preselectedPersonas = member ? [associationMemberToPersona(member)] : []

  return (
    <PistePanel
      headerText="Link association account"
      isOpen={isOpen}
      isLightDismiss={true}
      isFooterAtBottom={true}
      onRenderFooterContent={onRenderFooterContent}
      onDismiss={resetOnClose}
    >
      <FluentProvider>
        <FormSection>
          <Text>
            You must link your membership in order to get access to all Piste
            features.
          </Text>

          <MemberLookupField
            defaultFilter={defaultFilter}
            defaultSelectedItems={preselectedPersonas}
            itemLimit={1}
            onChange={onMemberLookupChange}
          />

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
