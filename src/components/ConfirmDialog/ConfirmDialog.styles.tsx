import styled from "@emotion/styled"
import { Spinner, SpinnerSize } from "@fluentui/react"

export const DialogSpinner = styled(Spinner)`
  display: inline-block;
  height: 15px;
  margin-right: 4px;
`

DialogSpinner.defaultProps = {
  size: SpinnerSize.medium,
}
