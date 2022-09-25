import {
  FormSelectField,
  FormSelectFieldProps,
} from "$components/Form/components/v9/FormSelectField"

import { states } from "./StatesDropdown.data"
import { Label } from "@fluentui/react-components"

const labelStyles = { margin: "5px 0", display: "block" }

export type StatesDropdownProps = Omit<
  FormSelectFieldProps,
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

      <FormSelectField {...props} placeholder="Select a state">
        {states.map(({ key, text }) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </FormSelectField>
    </div>
  )
}
