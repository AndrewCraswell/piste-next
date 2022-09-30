import { Button, FluentProvider, Text } from "@fluentui/react-components"
import { useCallback, useEffect, useMemo, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { Alert } from "@fluentui/react-components/unstable"
import { DismissCircleRegular } from "@fluentui/react-icons"

import { useAccountProfile } from "$hooks"
import { useGetMembersByIdQuery, useUpdateFencerByIdMutation } from "$queries"
import { associationMemberToPersona } from "$lib/associationMemberToPersona"
import { getMemberDetailsFromAssociation } from "$lib/getMemberDetailsFromAssociation"
import { IAssociationMemberPersona } from "$types"
import { MemberDetailsCard } from "$components/Cards/MemberDetailsCard"
import { PanelFooter } from "$components/PanelFooter"
import { PistePanel } from "$components/PistePanel"
import { FormMemberLookupField } from "$components/Form/components/FormMemberLookupField"
import { FormSection } from "$components/Form/components/FormSection"

interface IAssociationMembershipForm extends FieldValues {
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
    useForm<IAssociationMembershipForm>({
      defaultValues: {
        personas: [],
      },
    })
  const watchedPersonas = watch("personas")

  const [linkAccount] = useUpdateFencerByIdMutation()
  useGetMembersByIdQuery({
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
    const member = getValues("personas")[0]?.member
    const associationId = member?.AssociationMemberId

    linkAccount({
      variables: {
        fencerId,
        changes: {
          AssociationMemberId: associationId || null,
        },
      },
      onCompleted: () => {
        if (onSaved) {
          onSaved(associationId)
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
              {import.meta.env.VITE_SITE_NAME} features.
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
                  <Alert intent="error">
                    {alreadyLinkedTo === UserId ? (
                      <>
                        This membership is already linked to another fencer in
                        your account.
                      </>
                    ) : (
                      <>This membership is already linked to another fencer.</>
                    )}
                  </Alert>
                )}
              </>
            )}
          </FormSection>
        </FluentProvider>
      </form>
    </PistePanel>
  )
}
