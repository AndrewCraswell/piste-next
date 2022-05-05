import {
  DefaultButton,
  Dialog,
  DialogFooter,
  PrimaryButton,
} from "@fluentui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback } from "react"

import { FencerForm, IProfileFormFields, IFencerFormFields } from "$components"
import { useFormHelpers } from "$hooks"

export interface IEditFencerDialogProps {
  isOpen?: boolean
  onSaved: (fencer: IFencerFormFields) => void
  onClose: () => void
}

export const EditFencerDialog: React.FunctionComponent<
  IEditFencerDialogProps
> = ({ isOpen, onClose, onSaved }) => {
  const form = useForm<IProfileFormFields>()
  const { sanitizePhone, sanitizeDate } = useFormHelpers(form)

  const { handleSubmit, formState, reset } = form

  const onFencerAdded: SubmitHandler<IFencerFormFields> = useCallback(
    (fencer) => {
      fencer.Phone = sanitizePhone(fencer.Phone)
      fencer.Birthdate = sanitizeDate(fencer.Birthdate)

      onSaved(fencer)
      reset()
    },
    [onSaved, reset, sanitizeDate, sanitizePhone]
  )

  const onDialogClose = useCallback(() => {
    reset()
    onClose()
  }, [onClose, reset])

  return (
    <Dialog
      hidden={!isOpen}
      dialogContentProps={{
        title: "Add new fencer",
        subText:
          "Add a new fencer to your profile. This student can be enrolled in lessons or classes, and be linked to an official association membership.",
        showCloseButton: true,
        onDismiss: onClose,
      }}
      maxWidth={500}
    >
      <form onSubmit={handleSubmit(onFencerAdded)}>
        <FencerForm form={form} />

        <DialogFooter>
          <PrimaryButton type="submit" disabled={!formState.isDirty}>
            Save
          </PrimaryButton>
          <DefaultButton onClick={onDialogClose}>Cancel</DefaultButton>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
