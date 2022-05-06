import styled from "@emotion/styled"
import { Panel } from "@fluentui/react"

export const PistePanel = styled(Panel)`
  .ms-Panel-main {
    top: 48px;
  }
`
PistePanel.defaultProps = {
  closeButtonAriaLabel: "Close",
}
