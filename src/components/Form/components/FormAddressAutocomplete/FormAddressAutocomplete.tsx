import { usePlacesWidget } from "react-google-autocomplete"

import { FormInputField, FormInputFieldProps } from "../v9/FormInputField"
import { GoogleAddressResult } from "$types"
import { RefObject } from "react"
import { IProfileFormFields } from "$components/Forms/ProfileForm/ProfileForm.types"
import styled from "@emotion/styled"

const StyledFormInputField = styled(FormInputField)`
  width: 100%;

  & > span {
    width: inherit;
  }
`

export type FormAddressAutocompleteProps = {
  onPlaceSelected?: (
    address: GoogleAddressResult,
    input: RefObject<HTMLInputElement>
  ) => void
} & FormInputFieldProps<IProfileFormFields>

export const FormAddressAutocomplete: React.FunctionComponent<
  FormAddressAutocompleteProps
> = (props) => {
  const { name, control, controllerProps, onPlaceSelected, ...inputProps } =
    props

  const { ref } = usePlacesWidget({
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
    <StyledFormInputField
      name={name}
      control={control}
      controllerProps={controllerProps}
      {...inputProps}
      // @ts-ignore
      ref={ref}
    />
  )
}
