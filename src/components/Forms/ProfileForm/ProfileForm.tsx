import {
  StatesDropdown,
  FormTextField,
  FormMaskedTextField,
  FormDatePicker,
  FormAddressAutocomplete,
} from "$components"
import { GoogleAddressResult } from "$types"
import { Stack, IStackProps, DialogFooter } from "@fluentui/react"
import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ProfileFormFields } from "./ProfileForm.types"
import { useAccountProfile } from "$hooks"
import { Button } from "@fluentui/react-components"
import dayjs from "dayjs"

const columnTokens = { childrenGap: 50 }
const formTokens: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
}

export const ProfileForm: React.FunctionComponent = () => {
  const { handleSubmit, control, setValue, formState } =
    useForm<ProfileFormFields>()
  const { account, loading } = useAccountProfile()

  const onSubmit: SubmitHandler<ProfileFormFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      const invalidChars = ["_", "(", ")", " ", "", "-"]
      values.Phone = sanitizeInput({
        value: values.Phone,
        remove: invalidChars,
      })
      values.Postal = sanitizeInput({
        value: values.Postal,
        remove: invalidChars,
      })
    },
    []
  )

  const setFormFields = useCallback(
    (fields: Partial<ProfileFormFields>) => {
      Object.keys(fields).forEach((name) => {
        const fieldName = name as keyof ProfileFormFields
        const value = fields[fieldName] || ""
        setValue(fieldName, value)
      })
    },
    [setValue]
  )

  const setAddressOnAutocomplete = useCallback(
    (address: GoogleAddressResult) => {
      const fields: Partial<ProfileFormFields> = {
        Address: address.address1,
        Address2: address.address2,
        City: address.city,
        Postal: address.postalCode,
      }
      setFormFields(fields)
    },
    [setFormFields]
  )

  useEffect(() => {
    if (!loading) {
      const fields: Partial<ProfileFormFields> = {
        ...account,
        Birthdate: dayjs(account.Birthdate).toDate(),
      }

      setFormFields(fields)
    }
  }, [loading, setFormFields, account])

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <legend style={{ marginBottom: 20 }}></legend>
      <Stack {...formTokens}>
        <Stack horizontal tokens={columnTokens}>
          <FormTextField
            control={control}
            name="FirstName"
            id="firstName"
            label="First name"
            required
            placeholder="First name"
            maxLength={64}
            autoComplete="given-name"
          />
          <FormTextField
            control={control}
            id="lastName"
            name="LastName"
            label="Last name"
            required
            placeholder="Last name"
            maxLength={64}
            autoComplete="family-name"
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormDatePicker
            control={control}
            name="Birthdate"
            label="Birthdate"
            placeholder="Birthdate"
            ariaLabel="Birthdate"
            allowTextInput
            isRequired
            style={{ maxWidth: 177 }}
            defaultValue={
              dayjs(account.Birthdate).toDate() as unknown as string
            }
            maxDate={new Date()}
            formatDate={(date) => dayjs(date).format("M/DD/YYYY")}
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormMaskedTextField
            control={control}
            name="Phone"
            label="Phone number"
            mask="(999) 999-9999"
            title="A 10 digit phone number"
            required
            type="tel"
            autoComplete="tel-national"
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormTextField
            control={control}
            name="Email"
            label="Email"
            required
            placeholder="Email"
            type="email"
            maxLength={64}
            autoComplete="email"
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormAddressAutocomplete
            control={control}
            onPlaceSelected={setAddressOnAutocomplete}
            id="address"
            name="Address"
            label="Address"
            required
            placeholder="Address"
            maxLength={128}
            autoComplete="off"
            styles={{ root: { width: "100%" } }}
          />
        </Stack>

        <Stack horizontal tokens={columnTokens}>
          <FormTextField
            control={control}
            name="Address2"
            label="Unit"
            placeholder="Unit"
            maxLength={32}
            autoComplete="address-line2"
          />
          <FormTextField
            control={control}
            name="City"
            label="City"
            placeholder="City"
            required
            maxLength={64}
            autoComplete="address-level1"
          />
        </Stack>

        <Stack horizontal tokens={columnTokens}>
          <StatesDropdown
            control={control}
            name="State"
            required
            style={{ minWidth: 177 }}
          />
          <FormMaskedTextField
            control={control}
            id="postalCode"
            name="Postal"
            label="Postal code"
            mask="99999-9999"
            title="A 5 digit postal code"
            required
            autoComplete="postal-code"
          />
        </Stack>
      </Stack>

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

function sanitizeInput(options: { value?: string | null; remove: string[] }) {
  const { remove, value } = options

  return (
    remove.reduce(
      (val, char) => (val ? val.replaceAll(char, "") : ""),
      value
    ) ?? ""
  )
}
