import { Button, Text } from "@fluentui/react-components"
import { IButtonProps } from "@fluentui/react"
import { useCallback, useMemo } from "react"
import styled from "@emotion/styled"

import { LinkAssociationPanel } from "../../../LinkAssociationPanel"
import { useAccountProfile, useDisclosure } from "$hooks"
import { getMemberDetailsFromAssociation } from "$lib/getMemberDetailsFromAssociation"
import { AssociationMember } from "$types"
import { MemberDetailsCard } from "$components/Cards/MemberDetailsCard"

const MembershipCard = styled(MemberDetailsCard)`
  max-width: 330px;
  margin-bottom: 0.5rem;
`

export const AssociationMembershipLinker: React.FunctionComponent = () => {
  const { account, refetch: refetchProfile } = useAccountProfile()
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  const memberDetails = useMemo(() => {
    return getMemberDetailsFromAssociation(
      account.Student?.AssociationMember as AssociationMember
    )
  }, [account.Student?.AssociationMember])

  const paymentActions: IButtonProps[] = useMemo(
    () => [
      {
        iconProps: { iconName: "Edit" },
        onClick: onOpen,
      },
    ],
    [onOpen]
  )

  const onMembershipSaved = useCallback(() => {
    refetchProfile()
  }, [refetchProfile])

  return (
    <>
      <Text block style={{ marginBottom: "1rem" }}>
        Link an association membership to your account to verify membership type
        and sync your ratings and tournament data.
      </Text>
      {account.Student?.AssociationMember ? (
        <MembershipCard details={memberDetails!} actions={paymentActions} />
      ) : (
        <Button appearance="primary" onClick={onOpen}>
          Link membership
        </Button>
      )}
      <LinkAssociationPanel
        isOpen={isOpen}
        fencerId={account.PrimaryStudentId}
        associationId={account.Student?.AssociationMemberId}
        defaultFilter={account.FullName}
        onClose={onClose}
        onSaved={onMembershipSaved}
      />
    </>
  )
}
