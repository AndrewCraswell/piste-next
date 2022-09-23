import { useCallback } from "react"
import { UseFormReturn } from "react-hook-form"

import { GoogleAddressResult } from "$types"
import { IAddressFormFields } from "."
import { useFormHelpers } from "$hooks"
import { IProfileFormFields } from ".."
import { StatesDropdown } from "$components/Form/components/StatesDropdown"
import { FormAddressAutocomplete } from "$components/Form/components/FormAddressAutocomplete"
import { FormMaskedTextField } from "$components/Form/components/v8/FormMaskedTextField"
import { FormRow } from "$components/Form/components/FormRow"
import { FormSection } from "$components/Form/components/FormSection"
import { FormInputField } from "$components/Form/components/v9/FormInputField"

interface IAddressFormProps {
  form: UseFormReturn<IProfileFormFields, object>
}

export const AddressForm: React.FunctionComponent<IAddressFormProps> = ({
  form,
}) => {
  const { setFormFields } = useFormHelpers(form)
  const { control } = form

  const setAddressOnAutocomplete = useCallback(
    (address: GoogleAddressResult) => {
      const fields: Partial<IAddressFormFields> = {
        Address: address.address1,
        Address2: address.address2,
        City: address.city,
        Postal: address.postalCodePrefix,
      }

      setFormFields(fields)
    },
    [setFormFields]
  )

  return (
    <FormSection>
      <FormRow>
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
        />
      </FormRow>

      <FormRow>
        <FormInputField
          control={control}
          name="Address2"
          label="Unit"
          placeholder="Unit"
          maxLength={32}
          autoComplete="address-line2"
        />
        <FormInputField
          control={control}
          name="City"
          label="City"
          placeholder="City"
          required
          maxLength={64}
          autoComplete="address-level1"
        />
      </FormRow>

      <FormRow>
        <StatesDropdown control={control} name="State" required />
        <FormInputField
          control={control}
          id="postalCode"
          name="Postal"
          label="Postal code"
          placeholder="Postal code"
          title="A 5 digit postal code"
          maxLength={5}
          required
          autoComplete="postal-code"
        />
      </FormRow>
    </FormSection>
  )
}
