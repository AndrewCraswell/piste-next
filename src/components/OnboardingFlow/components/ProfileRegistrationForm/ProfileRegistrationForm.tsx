import {
  StatesDropdown,
  FormTextField,
  FormMaskedTextField,
  FormDatePicker,
  FormAddressAutocomplete,
} from "$components"
import { useDecisionTree } from "$components"
import { useAccountProfile, useFormHelpers } from "$hooks"
import { GoogleAddressResult } from "$types"
import { Stack, IStackProps, DialogFooter } from "@fluentui/react"
import { Button, Text } from "@fluentui/react-components"
import { useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ProfileRegistrationFields } from "./ProfileRegistrationForm.types"

const columnTokens = { childrenGap: 50 }
const formTokens: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
}

export const ProfileRegistrationForm: React.FunctionComponent = () => {
  const form = useForm<ProfileRegistrationFields>()
  const { sanitizePhone, sanitizePostal } = useFormHelpers(form)
  const { back, next } = useDecisionTree()
  const { account } = useAccountProfile()

  const { handleSubmit, control, setValue } = form

  const onSubmit: SubmitHandler<ProfileRegistrationFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      values.phoneNumber = sanitizePhone(values.phoneNumber)
      values.postalCode = sanitizePostal(values.postalCode)

      next()
    },
    [next, sanitizePhone, sanitizePostal]
  )

  const setAddressOnAutocomplete = useCallback(
    (address: GoogleAddressResult) => {
      setValue("address", address.address1)
      setValue("address2", address.address2)
      setValue("city", address.city)
      setValue("state", "WA")
      setValue("postalCode", address.postalCode)
    },
    [setValue]
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <legend style={{ marginBottom: 20 }}>
        <Text size={500}>Create profile</Text>
        <Text size={400}>
          <div>Setup your student profile so you can enroll in classes</div>
        </Text>
      </legend>
      <Stack {...formTokens}>
        <Stack horizontal tokens={columnTokens}>
          <FormTextField
            control={control}
            name="firstName"
            id="firstName"
            label="First name"
            required
            placeholder="First name"
            maxLength={64}
            autoComplete="given-name"
            defaultValue={account.FirstName}
          />
          <FormTextField
            control={control}
            id="lastName"
            name="lastName"
            label="Last name"
            required
            placeholder="Last name"
            maxLength={64}
            autoComplete="family-name"
            defaultValue={account.LastName}
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormDatePicker
            control={control}
            name="birthDate"
            label="Birthdate"
            placeholder="Birthdate"
            ariaLabel="Birthdate"
            allowTextInput
            isRequired
            style={{ maxWidth: 177 }}
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormMaskedTextField
            control={control}
            name="phoneNumber"
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
            name="email"
            label="Email"
            required
            placeholder="Email"
            type="email"
            maxLength={64}
            autoComplete="email"
            defaultValue={account.Email}
          />
        </Stack>
        <Stack horizontal tokens={columnTokens}>
          <FormAddressAutocomplete
            control={control}
            onPlaceSelected={setAddressOnAutocomplete}
            id="address"
            name="address"
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
            name="address2"
            label="Unit"
            placeholder="Unit"
            maxLength={32}
            autoComplete="address-line2"
          />
          <FormTextField
            control={control}
            name="city"
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
            name="state"
            required
            style={{ minWidth: 177 }}
          />
          <FormMaskedTextField
            control={control}
            id="postalCode"
            name="postalCode"
            label="Postal code"
            mask="99999-9999"
            title="A 5 digit postal code"
            required
            autoComplete="postal-code"
          />
        </Stack>
      </Stack>

      <DialogFooter>
        <Button onClick={back}>Back</Button>
        {/* <Button appearance="primary" type="submit">Next</Button> */}
        <Button appearance="primary" onClick={next}>
          Next
        </Button>
      </DialogFooter>
    </form>
  )
}
