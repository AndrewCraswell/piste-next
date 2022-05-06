import {
  DefaultButton,
  Dialog,
  DialogFooter,
  PrimaryButton,
} from "@fluentui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback, useMemo } from "react"

import { FencerForm, IProfileFormFields, IFencerFormFields } from "$components"
import { useAccountProfile, useFormHelpers } from "$hooks"
import {
  GetAccountFencersDocument,
  useAddFencerToAccountMutation,
  useUpdateFencerByIdMutation,
} from "$queries"
import { AccountFencer } from "$types"
import dayjs from "dayjs"

export interface IEditFencerDialogProps {
  fencer?: AccountFencer
  isOpen?: boolean
  onSaved: (fencer: IFencerFormFields) => void
  onClose: () => void
}

export const EditFencerDialog: React.FunctionComponent<
  IEditFencerDialogProps
> = ({ isOpen, onClose, onSaved, fencer }) => {
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
  const {
    account: { UserId },
  } = useAccountProfile()

  const [addFencerToAccount, { loading: isAddingFencer }] =
    useAddFencerToAccountMutation({
      refetchQueries: (result) => [
        {
          query: GetAccountFencersDocument,
          variables: {
            oid: result.data?.insert_Students_one?.Oid,
          },
        },
      ],
    })

  const [editFencer, { loading: isSavingFencer }] = useUpdateFencerByIdMutation(
    {
      refetchQueries: [
        {
          query: GetAccountFencersDocument,
          variables: {
            oid: UserId,
          },
        },
      ],
      onCompleted: () => {
        onClose()
        reset(getValues())
      },
    }
  )

  const onCancelClicked = useCallback(() => {
    onClose()
    reset(defaultFormValues)
  }, [defaultFormValues, onClose, reset])

  const onFencerSaved: SubmitHandler<IFencerFormFields> = useCallback(
    ({ FirstName, LastName, Birthdate, Phone, Email }) => {
      const newFencer = {
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
      }

      onSaved(newFencer)
    },
    [
      addFencerToAccount,
      editFencer,
      fencer?.StudentId,
      onSaved,
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
      <form onSubmit={handleSubmit(onFencerSaved)}>
        <FencerForm form={form} />

        <DialogFooter>
          <PrimaryButton type="submit" disabled={!formState.isDirty}>
            Save
          </PrimaryButton>
          <DefaultButton onClick={onCancelClicked}>Cancel</DefaultButton>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
