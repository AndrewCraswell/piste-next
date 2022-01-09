import { FormDropdown, FormDropdownProps } from "$components"
import { Dropdown, IDropdownProps } from "@fluentui/react"

import { states } from "./StatesDropdown.data"

export type StatesDropdownProps = Omit<
  FormDropdownProps,
  "options" | "label" | "placeholder"
>

export const StatesDropdown: React.FunctionComponent<StatesDropdownProps> = (
  props
) => {
  return (
    <FormDropdown
      label="State"
      placeholder="State"
      options={states}
      {...props}
    />
  )
}
