import { MessageBar, MessageBarType, PersonaSize } from "@fluentui/react"
import { Button, FluentProvider, Text } from "@fluentui/react-components"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"

import {
  FormSection,
  MemberDetailsCard,
  PistePanel,
  PanelFooter,
  FormMemberLookupField,
} from "$components"
import { useAccountProfile } from "$hooks"
import { useGetMembersByIdQuery, useUpdateFencerByIdMutation } from "$queries"
import {
  getMemberDetailsFromAssociation,
  associationMemberToPersona,
} from "$lib"
import { IAssociationMemberPersona } from "$types"

type AssociationMembershipForm = {
  personas: IAssociationMemberPersona[]
}

interface ILinkAssociationPanelProps {
  fencerId: string
  defaultFilter?: string
  associationId?: string | null
  isOpen: boolean
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
        personas: [],
      },
    })
  const watchedPersonas = watch("personas")

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
          personas: [associationMemberToPersona(member)],
        })
      }
    },
  })

  const onLinkClicked = useCallback(() => {
    const member = getValues("personas")[0].member

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

  const memberDetails = useMemo(() => {
    const member = watchedPersonas[0]?.member
    return getMemberDetailsFromAssociation(member)
  }, [watchedPersonas])

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

  useEffect(() => {
    const member = watchedPersonas[0]?.member
    if (member) {
      const otherAccount = member?.Students?.find(
        (f) => f?.StudentId !== fencerId
      )

      if (otherAccount?.Oid) {
        setAlreadyLinkedTo(otherAccount.Oid)
        return
      }
    }

    setAlreadyLinkedTo(undefined)
  }, [fencerId, watchedPersonas])

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
              name="personas"
              control={control}
              defaultFilter={defaultFilter}
              itemLimit={1}
            />

            {memberDetails && (
              <>
                <MemberDetailsCard details={memberDetails} />
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
