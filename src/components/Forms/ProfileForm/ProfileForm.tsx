import { DialogFooter } from "@fluentui/react"
import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { Button } from "@fluentui/react-components"
import dayjs from "dayjs"

import { IProfileFormFields } from "./ProfileForm.types"
import { useAccountProfile, useFormHelpers } from "$hooks"
import { AddressForm, IAddressFormFields } from "../AddressForm"
import { FencerForm, IFencerFormFields } from "../FencerForm"
import { FormSection } from "$components"

export const ProfileForm: React.FunctionComponent = () => {
  const form = useForm<IProfileFormFields>()
  const { setFormFields, sanitizePhone, sanitizePostal } = useFormHelpers(form)
  const { account, loading } = useAccountProfile()

  const { control, handleSubmit, formState } = form

  const onSubmit: SubmitHandler<IProfileFormFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      values.Phone = sanitizePhone(values.Phone)
      values.Postal = sanitizePostal(values.Postal)

      console.log(JSON.stringify(values))
    },
    [sanitizePhone, sanitizePostal]
  )

  useEffect(() => {
    if (!loading) {
      const fields: Partial<IProfileFormFields> = {
        ...account,
        Birthdate: dayjs(account.Birthdate).toDate(),
      }

      setFormFields(fields)
    }
  }, [loading, setFormFields, account])

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <FormSection>
        <FencerForm form={form} />
        <AddressForm form={form} />
      </FormSection>

      <DialogFooter>
        <Button
          appearance="primary"
          type="submit"
          disabled={!formState.isDirty || formState.isSubmitting}
        >
          Save
        </Button>
      </DialogFooter>
    </form>
  )
}
