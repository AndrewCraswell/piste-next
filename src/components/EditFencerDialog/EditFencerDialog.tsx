import { Dialog, DialogFooter } from "@fluentui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback, useMemo } from "react"
import dayjs from "dayjs"
import { Button, FluentProvider } from "@fluentui/react-components"

import {
  GetAccountFencersDocument,
  useAddFencerToAccountMutation,
  useUpdateFencerByIdMutation,
} from "$queries"
import { AccountFencer } from "$types"
import {
  IFencerFormFields,
  IProfileFormFields,
  FencerForm,
} from "$components/Forms"
import { useAccountProfile } from "$hooks/useAccountProfile"
import { useFormHelpers } from "$hooks/useFormHelpers"

export interface EditFencerDialogProps {
  fencer?: AccountFencer
  isOpen?: boolean
  onSaved?: (fencer: IFencerFormFields) => void
  onClose: () => void
}

export function EditFencerDialog(props: EditFencerDialogProps) {
  const { isOpen, onClose, onSaved, fencer } = props
  const {
    account: { UserId },
  } = useAccountProfile()
  const defaultFormValues = useMemo(
    () => ({
      ...fencer,
      Birthdate: dayjs(fencer?.Birthdate).toDate(),
      Email: fencer?.Email ?? undefined,
      Phone: fencer?.Phone ?? undefined,
    }),
    [fencer]
  )

  const form = useForm<IProfileFormFields>({ defaultValues: defaultFormValues })
  const { handleSubmit, formState, reset, getValues } = form
  const { sanitizePhone, sanitizeDate } = useFormHelpers(form)

  const [addFencerToAccount] = useAddFencerToAccountMutation({
    refetchQueries: (result) => [
      {
        query: GetAccountFencersDocument,
        variables: {
          oid: result.data?.insert_Students_one?.Oid,
        },
      },
    ],
  })

  const [editFencer] = useUpdateFencerByIdMutation({
    onCompleted: () => {
      onClose()
      reset(getValues())
    },
  })

  const onCancelClicked = useCallback(() => {
    onClose()
    reset(defaultFormValues)
  }, [defaultFormValues, onClose, reset])

  const onFencerSaved: SubmitHandler<IFencerFormFields> = useCallback(
    ({ FirstName, LastName, Birthdate, Phone, Email }) => {
      const newFencer = {
        Oid: UserId,
        FirstName,
        LastName,
        Birthdate: sanitizeDate(Birthdate),
        Phone: sanitizePhone(Phone),
        Email,
      }

      if (fencer?.StudentId) {
        editFencer({
          variables: {
            fencerId: fencer?.StudentId,
            changes: newFencer,
          },
        })
      } else {
        addFencerToAccount({
          variables: { fencer: newFencer },
        })
        reset({})
      }

      if (onSaved) {
        onSaved(newFencer)
      }
    },
    [
      UserId,
      addFencerToAccount,
      editFencer,
      fencer?.StudentId,
      onSaved,
      reset,
      sanitizeDate,
      sanitizePhone,
    ]
  )

  return (
    <Dialog
      hidden={!isOpen}
      dialogContentProps={{
        title: "Add new fencer",
        subText:
          "Add a new fencer to your profile. This student can be enrolled in lessons or classes, and be linked to an official association membership.",
        showCloseButton: true,
        onDismiss: onCancelClicked,
        closeButtonAriaLabel: "Close",
      }}
      maxWidth={500}
    >
      <FluentProvider>
        <form onSubmit={handleSubmit(onFencerSaved)}>
          <FencerForm form={form} />

          <DialogFooter>
            <Button
              appearance="primary"
              type="submit"
              disabled={!formState.isDirty}
            >
              Save
            </Button>
            <Button onClick={onCancelClicked}>Cancel</Button>
          </DialogFooter>
        </form>
      </FluentProvider>
    </Dialog>
  )
}
