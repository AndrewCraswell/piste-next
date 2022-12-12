import {
  FormDropdown,
  FormDropdownProps,
} from "$components/Form/components/FormDropdown"

import { states } from "./StatesDropdown.data"

export type StatesDropdownProps = Omit<
  FormDropdownProps,
  "options" | "label" | "placeholder"
>

export function StatesDropdown(props: StatesDropdownProps) {
  return (
    <FormDropdown
      label="State"
      placeholder="State"
      options={states}
      {...props}
    />
  )
}
