import {
  FormSection,
  MemberDetailsCard,
  PistePanel,
  associationMemberToPersona,
} from "$components"
import { FormMemberLookupField } from "$components"
import { IAssociationMemberPersona } from "$components/MemberLookupField"
import { useAccountProfile } from "$hooks"
import { useGetMembersByIdQuery, useUpdateFencerByIdMutation } from "$queries"
import styled from "@emotion/styled"
import { DialogFooter, MessageBar, MessageBarType } from "@fluentui/react"
import { Button, FluentProvider, Text } from "@fluentui/react-components"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

// TODO: Move this PanelFooter into another component file
export const PanelFooter = styled(DialogFooter)`
  .ms-Dialog-actionsRight {
    text-align: left;
  }

  .ms-Dialog-action:first-of-type {
    margin-left: 0;
  }
`

type AssociationMembershipForm = {
  members: IAssociationMemberPersona[]
}

export interface ILinkAssociationPanelProps {
  fencerId: string
  defaultFilter?: string
  associationId?: string
  isOpen?: boolean
  onSaved?: (membershipId?: string) => void
  onClose: () => void
}

export const LinkAssociationPanel: React.FunctionComponent<
  ILinkAssociationPanelProps
> = ({ associationId, fencerId, defaultFilter, onClose, onSaved, isOpen }) => {
  const {
    account: { UserId },
  } = useAccountProfile()

  const [alreadyLinkedTo, setAlreadyLinkedTo] = useState<string | undefined>(
    undefined
  )
  const { handleSubmit, control, reset, formState, getValues, watch } =
    useForm<AssociationMembershipForm>({
      defaultValues: {
        members: [],
      },
    })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.members?.length) {
        const member = value.members[0]?.member
        const otherAccount = member?.Students?.find(
          (f) => f?.StudentId !== fencerId
        )
        console.log(otherAccount)
        if (otherAccount) {
          setAlreadyLinkedTo(otherAccount.Oid)
          return
        }
      }

      setAlreadyLinkedTo(undefined)
    })
    return () => subscription.unsubscribe()
  }, [fencerId, watch])

  const [linkAccount] = useUpdateFencerByIdMutation()
  const { data } = useGetMembersByIdQuery({
    variables: {
      id: associationId!,
    },
    skip: !associationId,
    onCompleted: (data) => {
      const member = data.AssociationMembers_by_pk
      if (member) {
        reset({
          members: [associationMemberToPersona(member)],
        })
      }
    },
  })

  const onLinkClicked = useCallback(() => {
    const member = getValues("members")[0].member

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
        onClose()
      },
    })
  }, [fencerId, getValues, linkAccount, onClose, onSaved])

  const resetOnClose = useCallback(() => {
    reset()
    onClose()
  }, [onClose, reset])

  const onRenderFooterContent = useCallback(
    () => (
      <FluentProvider>
        <PanelFooter>
          <Button
            appearance="primary"
            onClick={handleSubmit(onLinkClicked)}
            disabled={!formState.isDirty || !!alreadyLinkedTo}
          >
            Save
          </Button>
          <Button onClick={resetOnClose}>Cancel</Button>
        </PanelFooter>
      </FluentProvider>
    ),
    [
      alreadyLinkedTo,
      formState.isDirty,
      handleSubmit,
      onLinkClicked,
      resetOnClose,
    ]
  )

  const member = getValues("members")[0]?.member

  return (
    <PistePanel
      headerText="Link association account"
      isOpen={isOpen}
      isLightDismiss={true}
      isFooterAtBottom={true}
      onRenderFooterContent={onRenderFooterContent}
      onDismiss={resetOnClose}
    >
      <form onSubmit={handleSubmit(onLinkClicked)}>
        <FluentProvider>
          <FormSection>
            <Text>
              You must link your membership in order to get access to all{" "}
              {process.env.NEXT_PUBLIC_SITE_NAME} features.
            </Text>

            <FormMemberLookupField
              name="members"
              control={control}
              defaultFilter={defaultFilter}
              itemLimit={1}
            />

            {member && (
              <>
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
                {!!alreadyLinkedTo && (
                  <MessageBar messageBarType={MessageBarType.blocked}>
                    {alreadyLinkedTo === UserId ? (
                      <>
                        This membership is already linked to another fencer in
                        your account.
                      </>
                    ) : (
                      <>This membership is already linked to another fencer.</>
                    )}
                  </MessageBar>
                )}
              </>
            )}
          </FormSection>
        </FluentProvider>
      </form>
    </PistePanel>
  )
}
