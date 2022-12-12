import { usePlacesWidget } from "react-google-autocomplete"

import { FormTextField, FormTextFieldProps } from "../FormTextField"
import { GoogleAddressResult } from "$types"
import { RefObject } from "react"
import { IProfileFormFields } from "$components/Forms/ProfileForm/ProfileForm.types"

export type FormAddressAutocompleteProps = {
  onPlaceSelected?: (
    address: GoogleAddressResult,
    input: RefObject<HTMLInputElement>
  ) => void
} & Omit<FormTextFieldProps<IProfileFormFields>, "elementRef">

export function FormAddressAutocomplete(props: FormAddressAutocompleteProps) {
  const { name, control, controllerProps, onPlaceSelected, ...inputProps } =
    props

  const { ref: autocompleteRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
    onPlaceSelected: (place, input) => {
      const address = new GoogleAddressResult(place)
      if (onPlaceSelected) {
        onPlaceSelected(address, input)
      }
    },
    options: {
      componentRestrictions: {
        country: ["us"],
      },
      types: ["address"],
      fields: ["address_components", "formatted_address"],
    },
  })

  return (
    <FormTextField
      name={name}
      control={control}
      controllerProps={controllerProps}
      {...inputProps}
      elementRef={(c: any) => {
        // @ts-ignore
        autocompleteRef.current = c?.querySelector("input")
      }}
    />
  )
}
