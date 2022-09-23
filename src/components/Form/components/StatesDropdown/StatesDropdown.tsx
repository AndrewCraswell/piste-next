import {
  FormSelect,
  FormSelectProps,
} from "$components/Form/components/v9/FormSelect"

import { states } from "./StatesDropdown.data"
import { Label } from "@fluentui/react-components"

const labelStyles = { margin: "5px 0", display: "block" }

export type StatesDropdownProps = Omit<
  FormSelectProps,
  "children" | "placeholder"
> & { required: boolean }

// TODO: Associate the label with the input

export const StatesDropdown: React.FunctionComponent<StatesDropdownProps> = (
  props
) => {
  return (
    <div>
      <Label required={props.required} style={labelStyles}>
        State
      </Label>

      <FormSelect {...props} defaultValue="">
        <option value="" disabled>
          Select a state
        </option>
        {states.map(({ key, text }) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </FormSelect>
    </div>
  )
}
